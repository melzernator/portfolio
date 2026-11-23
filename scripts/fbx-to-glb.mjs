import fs from 'node:fs';
import path from 'node:path';
import { Blob } from 'node:buffer';
import * as THREE from 'three';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';

if (!globalThis.FileReader) {
  globalThis.FileReader = class FileReader {
    result = null;
    onload = null;
    onloadend = null;
    onerror = null;
    readAsArrayBuffer(blob) {
      Promise.resolve(blob.arrayBuffer())
        .then((buf) => {
          this.result = buf;
          this.onload?.({ target: this });
          this.onloadend?.({ target: this });
        })
        .catch((err) => this.onerror?.(err));
    }
    readAsDataURL(blob) {
      Promise.resolve(blob.arrayBuffer())
        .then((buf) => {
          this.result = `data:application/octet-stream;base64,${Buffer.from(buf).toString('base64')}`;
          this.onload?.({ target: this });
          this.onloadend?.({ target: this });
        })
        .catch((err) => this.onerror?.(err));
    }
  };
}
globalThis.Blob ??= Blob;

const [, , inPath, outPath, ...rest] = process.argv;
if (!inPath || !outPath) {
  console.error('usage: node fbx-to-glb.mjs <in.fbx> <out.glb> [--keep a,b,c]');
  process.exit(1);
}
const keepArg = rest.find((arg) => arg.startsWith('--keep='));
const keep = keepArg
  ? new Set(
      keepArg
        .slice('--keep='.length)
        .split(',')
        .map((name) => name.trim())
        .filter(Boolean),
    )
  : null;

const absIn = path.resolve(inPath);
const buffer = fs.readFileSync(absIn);
const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
const resourcePath = path.dirname(absIn) + path.sep;

const loader = new FBXLoader();
const group = loader.parse(arrayBuffer, resourcePath);
if (keep) {
  const drop = [];
  group.traverse((obj) => {
    if (obj instanceof THREE.Mesh && !keep.has(obj.name)) drop.push(obj);
  });
  for (const obj of drop) obj.removeFromParent();
  console.log(`kept ${[...keep].join(', ')} (dropped ${drop.length})`);
}
group.traverse((obj) => {
  if (!(obj instanceof THREE.Mesh)) return;
  const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
  const converted = mats.map((mat) => {
    if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshBasicMaterial) {
      return mat;
    }
    const next = new THREE.MeshStandardMaterial();
    if (mat) {
      next.name = mat.name;
      if ('color' in mat) next.color.copy(mat.color);
      if ('map' in mat) next.map = mat.map;
      next.metalness = 0.05;
      next.roughness = 0.7;
    }
    mat?.dispose?.();
    return next;
  });
  obj.material = Array.isArray(obj.material) ? converted : converted[0];
});

const exporter = new GLTFExporter();
const glb = await exporter.parseAsync(group, { binary: true });
const bytes =
  glb instanceof ArrayBuffer ? Buffer.from(glb) : Buffer.from(await glb.arrayBuffer());
const absOut = path.resolve(outPath);
fs.mkdirSync(path.dirname(absOut), { recursive: true });
fs.writeFileSync(absOut, bytes);
console.log(`wrote ${outPath} (${bytes.length} bytes)`);
