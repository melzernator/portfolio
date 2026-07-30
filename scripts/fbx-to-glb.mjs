import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const name = process.argv[2] || 'phone';
const fbxPath = path.resolve(root, `src/assets/workspace/${name}.fbx`);
const outPath = path.resolve(root, `src/assets/workspace/${name}.glb`);

if (!fs.existsSync(fbxPath)) {
  console.error(`Missing FBX: ${fbxPath}`);
  process.exit(1);
}

globalThis.self = globalThis;

class NodeFileReader {
  constructor() {
    this.onload = null;
    this.onloadend = null;
    this.onerror = null;
    this.result = null;
  }

  readAsArrayBuffer(blob) {
    const run = async () => {
      try {
        let ab;
        if (blob instanceof ArrayBuffer) ab = blob;
        else if (ArrayBuffer.isView(blob)) ab = blob.buffer.slice(blob.byteOffset, blob.byteOffset + blob.byteLength);
        else if (typeof blob?.arrayBuffer === 'function') ab = await blob.arrayBuffer();
        else if (Buffer.isBuffer(blob)) ab = blob.buffer.slice(blob.byteOffset, blob.byteOffset + blob.byteLength);
        else throw new Error('Unsupported blob type: ' + Object.prototype.toString.call(blob));
        this.result = ab;
        const ev = { target: this };
        this.onload?.(ev);
        this.onloadend?.(ev);
      } catch (e) {
        this.onerror?.(e);
        this.onloadend?.({ target: this });
      }
    };
    queueMicrotask(run);
  }
}

globalThis.FileReader = NodeFileReader;

const APPEARANCE = {
  'Mahogany Veneer': { color: 0x4a2c1a, roughness: 0.55, metalness: 0.05 },
  'Walnut Veneer': { color: 0x5c3a21, roughness: 0.5, metalness: 0.05 },
  // Match the midnight-green / dark teal frame from photos
  'Steel - Satin': { color: 0x1f3333, roughness: 0.32, metalness: 0.9 },
  // Pendant outer shell — clear acrylic
  'Glass - Clouds': {
    color: 0xf6f6f3,
    roughness: 0.12,
    metalness: 0,
    transparent: true,
    opacity: 0.35,
    side: THREE.DoubleSide,
    depthWrite: false,
  },
  // Sign acrylic sheets
  'Acrylic (Clear)': {
    color: 0xf6f6f3,
    roughness: 0.12,
    metalness: 0,
    transparent: true,
    opacity: 0.35,
    side: THREE.DoubleSide,
    depthWrite: false,
  },
};

const buffer = fs.readFileSync(fbxPath).buffer;
const group = new FBXLoader().parse(buffer, path.dirname(fbxPath) + '/');

group.traverse((obj) => {
  if (!obj.isMesh) return;
  const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
  const converted = mats.map((m) => {
    if (!m) return m;
    const name = m.name || '';
    const preset = APPEARANCE[name];
    const finalColor = preset?.color ?? m.color?.getHex?.() ?? 0x888888;
    const opacity = preset?.opacity ?? 1;
    const transparent = preset?.transparent ?? opacity < 1;
    console.log(
      `  ${obj.name} / ${name} → #${finalColor.toString(16).padStart(6, '0')}` +
        (transparent ? ` opacity=${opacity}` : ''),
    );
    return new THREE.MeshStandardMaterial({
      name,
      color: finalColor,
      roughness: preset?.roughness ?? 0.6,
      metalness: preset?.metalness ?? 0.1,
      side: preset?.side ?? m.side ?? THREE.FrontSide,
      map: m.map || null,
      transparent,
      opacity,
      depthWrite: preset?.depthWrite ?? true,
    });
  });
  obj.material = Array.isArray(obj.material) ? converted : converted[0];
  if (converted.some((m) => m?.transparent)) obj.renderOrder = 1;
});

await new Promise((resolve, reject) => {
  new GLTFExporter().parse(
    group,
    (result) => {
      if (!(result instanceof ArrayBuffer)) {
        reject(new Error('Expected binary GLB'));
        return;
      }
      fs.writeFileSync(outPath, Buffer.from(result));
      console.log(`Wrote ${outPath} (${result.byteLength} bytes)`);
      resolve();
    },
    reject,
    { binary: true },
  );
});
