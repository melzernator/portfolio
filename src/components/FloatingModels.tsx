import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import signModel from '../assets/workspace/sign.glb';
import fanModel from '../assets/workspace/fan.glb';
import cherokeeModel from '../assets/workspace/cherokee.glb';
import atasModel from '../assets/workspace/atas.glb';
import { navigate } from '../router';

type ModelDef = {
  url: string;
  route?: string;
  /** target size in world units */
  size: number;
  /** per-model [x, y, z] rotation (rad) so its front faces the camera when hovered */
  presentRotation?: [number, number, number];
  /** top-down tilt (rad) added to the hover pose; defaults to 0.35, set 0 for dead-on front */
  presentTilt?: number;
};

const MODELS: ModelDef[] = [
  { url: signModel, route: '/sign', size: 3.2, presentRotation: [Math.PI / 2, 0, 0], presentTilt: 0 },
  { url: fanModel, route: '/fan', size: 2.6, presentRotation: [0, -Math.PI / 2, 0] },
  { url: cherokeeModel, size: 2.8 },
  { url: atasModel, route: '/atas', size: 3.0, presentRotation: [0, Math.PI, 0] },
];

type Floater = {
  group: THREE.Group;
  route?: string;
  radius: number; // bounding sphere radius for collision / wall checks
  velocity: THREE.Vector2;
  spin: THREE.Vector3;
  targetScale: number;
  baseScale: number;
  /** orientation to ease into while hovered */
  presentQuat: THREE.Quaternion;
};

export default function FloatingModels() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 12);

    scene.add(new THREE.AmbientLight(0xffffff, 1.2));
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(4, 6, 8);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xffffff, 0.8);
    fill.position.set(-5, -2, 4);
    scene.add(fill);

    // Visible extents of the floating plane (z = 0), updated on resize.
    // yMax is lowered so models never overlap the page header text,
    // yMin is raised so they never overlap the bottom nav pill.
    const bounds = { x: 6, yMin: -4, yMax: 4 };
    const floaters: Floater[] = [];

    const updateSize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      const halfY = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
      const halfX = halfY * camera.aspect;

      // pixel-space exclusion zones -> world units
      const header = document.querySelector('.workspace__header');
      const headerPx = header ? header.getBoundingClientRect().bottom : 240;
      const navPx = 120; // bottom pill nav + margin
      const worldPerPx = (halfY * 2) / h;

      bounds.x = halfX * 0.94;
      bounds.yMax = halfY - headerPx * worldPerPx - 0.2;
      bounds.yMin = -halfY + navPx * worldPerPx + 0.2;

      // shrink models on small viewports so they all fit in the allowed band
      const spanY = Math.max(bounds.yMax - bounds.yMin, 0.5);
      const fit = Math.max(MODELS.length, 2) + 0.2;
      const maxR = Math.min(bounds.x / fit, spanY / 2.2);
      for (const f of floaters) {
        f.baseScale = Math.min(1, maxR / f.radius);
      }
    };
    updateSize();

    const loader = new GLTFLoader();
    let disposed = false;

    MODELS.forEach((def, i) => {
      loader.load(def.url, (gltf) => {
        if (disposed) return;
        const model = gltf.scene;

        // normalize: center and scale to def.size
        const box = new THREE.Box3().setFromObject(model);
        const sphere = box.getBoundingSphere(new THREE.Sphere());
        const scale = def.size / (sphere.radius * 2);
        model.scale.setScalar(scale);
        box.setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        const group = new THREE.Group();
        group.add(model);

        // start models spaced across the screen so they don't overlap
        const t = MODELS.length === 1 ? 0.5 : i / (MODELS.length - 1);
        const startX = (t - 0.5) * bounds.x * 1.6;
        const midY = (bounds.yMin + bounds.yMax) / 2;
        const spanY = Math.max(bounds.yMax - bounds.yMin, 0.5);
        group.position.set(startX, midY + (Math.random() - 0.5) * spanY * 0.5, 0);

        scene.add(group);
        const spanYNow = Math.max(bounds.yMax - bounds.yMin, 0.5);
        const fitNow = Math.max(MODELS.length, 2) + 0.2;
        const maxRNow = Math.min(bounds.x / fitNow, spanYNow / 2.2);
        const baseScale = Math.min(1, maxRNow / (def.size / 2));
        group.scale.setScalar(baseScale);
        floaters.push({
          group,
          route: def.route,
          radius: def.size / 2,
          velocity: new THREE.Vector2(
            (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random() * 0.15),
            (Math.random() > 0.5 ? 1 : -1) * (0.15 + Math.random() * 0.1),
          ),
          spin: new THREE.Vector3(
            (Math.random() - 0.5) * 0.2,
            0.25 + Math.random() * 0.2,
            (Math.random() - 0.5) * 0.1,
          ),
          targetScale: 1,
          baseScale,
          // optional top-down tilt applied on top of the model's own front-facing fix
          presentQuat: new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(def.presentTilt ?? 0.35, 0, 0))
            .multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(...(def.presentRotation ?? [0, 0, 0])))),
        });
      });
    });

    // hover / drag / tap handling
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2(-10, -10);
    let hovered: Floater | null = null;

    // drag state
    const dragPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0); // z = 0
    const worldPoint = new THREE.Vector3();
    const dragOffset = new THREE.Vector2();
    const throwVel = new THREE.Vector2();
    let dragged: Floater | null = null;
    let lastMove = { x: 0, y: 0, t: 0 };
    let downClient = { x: 0, y: 0 };
    let downTime = 0;
    let movedPx = 0;

    const setPointer = (e: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const pointerToWorld = (): THREE.Vector3 | null => {
      raycaster.setFromCamera(pointer, camera);
      return raycaster.ray.intersectPlane(dragPlane, worldPoint);
    };

    const pickFloater = (): Floater | null => {
      raycaster.setFromCamera(pointer, camera);
      for (const f of floaters) {
        if (raycaster.intersectObject(f.group, true).length > 0) return f;
      }
      return null;
    };

    const onPointerDown = (e: PointerEvent) => {
      setPointer(e);
      const hit = pickFloater();
      if (!hit) return;
      const world = pointerToWorld();
      if (!world) return;

      dragged = hit;
      renderer.domElement.setPointerCapture(e.pointerId);
      dragOffset.set(hit.group.position.x - world.x, hit.group.position.y - world.y);
      throwVel.set(0, 0);
      lastMove = { x: world.x, y: world.y, t: performance.now() };
      downClient = { x: e.clientX, y: e.clientY };
      downTime = performance.now();
      movedPx = 0;
      e.preventDefault();
    };

    const onPointerMove = (e: PointerEvent) => {
      setPointer(e);
      if (!dragged) return;

      const world = pointerToWorld();
      if (!world) return;

      movedPx = Math.max(
        movedPx,
        Math.hypot(e.clientX - downClient.x, e.clientY - downClient.y),
      );

      const now = performance.now();
      const dtMove = Math.max((now - lastMove.t) / 1000, 0.001);
      const vx = (world.x - lastMove.x) / dtMove;
      const vy = (world.y - lastMove.y) / dtMove;
      // smooth instantaneous velocity so the throw feels natural
      throwVel.x = THREE.MathUtils.lerp(throwVel.x, vx, 0.4);
      throwVel.y = THREE.MathUtils.lerp(throwVel.y, vy, 0.4);
      lastMove = { x: world.x, y: world.y, t: now };

      // follow the pointer, clamped inside the allowed region
      const effR = dragged.radius * dragged.group.scale.x;
      const p = dragged.group.position;
      p.x = THREE.MathUtils.clamp(world.x + dragOffset.x, -bounds.x + effR, bounds.x - effR);
      p.y = THREE.MathUtils.clamp(world.y + dragOffset.y, bounds.yMin + effR, bounds.yMax - effR);
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!dragged) return;
      if (renderer.domElement.hasPointerCapture(e.pointerId)) {
        renderer.domElement.releasePointerCapture(e.pointerId);
      }
      const f = dragged;
      dragged = null;

      const isTap = movedPx < 8 && performance.now() - downTime < 350;
      if (isTap && f.route) {
        if (/^https?:\/\//.test(f.route)) {
          window.location.href = f.route;
        } else {
          navigate(f.route);
        }
        return;
      }

      // throw: hand over the tracked drag velocity (capped)
      const maxSpeed = 10;
      const speed = throwVel.length();
      if (speed > maxSpeed) throwVel.multiplyScalar(maxSpeed / speed);
      f.velocity.copy(throwVel);

      // no hover on touch — clear stale pointer so nothing stays "hovered"
      if (e.pointerType !== 'mouse') pointer.set(-10, -10);
    };

    const onPointerLeave = () => {
      pointer.set(-10, -10);
    };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointermove', onPointerMove);
    renderer.domElement.addEventListener('pointerup', onPointerUp);
    renderer.domElement.addEventListener('pointercancel', onPointerUp);
    renderer.domElement.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('resize', updateSize);

    const clock = new THREE.Clock();
    let raf = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);
      const t = clock.elapsedTime;

      // hover detection (the dragged model always counts as hovered)
      if (dragged) {
        hovered = dragged;
      } else {
        raycaster.setFromCamera(pointer, camera);
        hovered = null;
        for (const f of floaters) {
          if (raycaster.intersectObject(f.group, true).length > 0) {
            hovered = f;
            break;
          }
        }
      }
      renderer.domElement.style.cursor = dragged ? 'grabbing' : hovered ? 'grab' : 'default';

      for (const f of floaters) {
        const p = f.group.position;
        const isHeld = f === dragged;
        const isHovered = f === hovered;

        if (!isHeld && !isHovered) {
          // friction: thrown models ease back down to cruising speed
          const cruise = 0.45;
          const speed = f.velocity.length();
          if (speed > cruise) {
            const eased = Math.max(cruise, speed * Math.exp(-1.1 * dt));
            f.velocity.multiplyScalar(eased / speed);
          }

          // drift
          p.x += f.velocity.x * dt;
          p.y += f.velocity.y * dt;

          // bounce off the allowed region edges (account for model radius)
          const effR = f.radius * f.group.scale.x;
          if (p.x + effR > bounds.x) { p.x = bounds.x - effR; f.velocity.x = -Math.abs(f.velocity.x); }
          if (p.x - effR < -bounds.x) { p.x = -bounds.x + effR; f.velocity.x = Math.abs(f.velocity.x); }
          if (p.y + effR > bounds.yMax) { p.y = bounds.yMax - effR; f.velocity.y = -Math.abs(f.velocity.y); }
          if (p.y - effR < bounds.yMin) { p.y = bounds.yMin + effR; f.velocity.y = Math.abs(f.velocity.y); }
        }

        // tumble + gentle bob — while hovered or held, ease into the
        // front/top-down presentation view instead
        if (!isHovered && !isHeld) {
          f.group.rotation.x += f.spin.x * dt;
          f.group.rotation.y += f.spin.y * dt;
          f.group.rotation.z += f.spin.z * dt;
          p.y += Math.sin(t * 1.5 + p.x) * 0.0015;
        } else {
          f.group.quaternion.slerp(f.presentQuat, 1 - Math.exp(-8 * dt));
        }

        // hover scale (smooth)
        f.targetScale = isHovered || isHeld ? f.baseScale * 1.15 : f.baseScale;
        const s = THREE.MathUtils.lerp(f.group.scale.x, f.targetScale, 1 - Math.exp(-10 * dt));
        f.group.scale.setScalar(s);
      }

      // separate overlapping pairs (elastic push-apart)
      for (let a = 0; a < floaters.length; a++) {
        for (let b = a + 1; b < floaters.length; b++) {
          const fa = floaters[a];
          const fb = floaters[b];
          const pa = fa.group.position;
          const pb = fb.group.position;
          const minDist = fa.radius * fa.group.scale.x + fb.radius * fb.group.scale.x;
          const dx = pb.x - pa.x;
          const dy = pb.y - pa.y;
          const dist = Math.hypot(dx, dy) || 0.001;
          if (dist < minDist) {
            const nx = dx / dist;
            const ny = dy / dist;
            const overlap = minDist - dist;
            if (fa === dragged) {
              // held model shoves the other one out of the way
              pb.x += nx * overlap;
              pb.y += ny * overlap;
              fb.velocity.x += nx * 0.8;
              fb.velocity.y += ny * 0.8;
            } else if (fb === dragged) {
              pa.x -= nx * overlap;
              pa.y -= ny * overlap;
              fa.velocity.x -= nx * 0.8;
              fa.velocity.y -= ny * 0.8;
            } else {
              const push = overlap / 2;
              pa.x -= nx * push;
              pa.y -= ny * push;
              pb.x += nx * push;
              pb.y += ny * push;
              // swap velocity components along collision normal
              const va = fa.velocity.x * nx + fa.velocity.y * ny;
              const vb = fb.velocity.x * nx + fb.velocity.y * ny;
              fa.velocity.x += (vb - va) * nx;
              fa.velocity.y += (vb - va) * ny;
              fb.velocity.x += (va - vb) * nx;
              fb.velocity.y += (va - vb) * ny;
            }
          }
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', updateSize);
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer.domElement.removeEventListener('pointermove', onPointerMove);
      renderer.domElement.removeEventListener('pointerup', onPointerUp);
      renderer.domElement.removeEventListener('pointercancel', onPointerUp);
      renderer.domElement.removeEventListener('pointerleave', onPointerLeave);
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          mats.forEach((m) => m.dispose());
        }
      });
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="workspace__canvas" />;
}
