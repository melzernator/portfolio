/** Video formats accepted when resolving assets under src/assets. */
const VIDEO_EXT = /\.(mp4|mov|gif)$/i;

const EXT_PRIORITY: Record<string, number> = {
  '.mp4': 0,
  '.mov': 1,
  '.gif': 2,
};

// Include uppercase extensions (e.g. .MOV) — Vite's brace globs are case-sensitive.
// Exclude originals/ so source files stay in the repo but are not shipped in the build.
const modules = import.meta.glob(
  [
    '/src/assets/**/*.{mp4,MP4,mov,MOV,gif,GIF}',
    '!/src/assets/**/originals/**',
  ],
  {
    eager: true,
    import: 'default',
  },
) as Record<string, string>;

/** Map of `/src/assets/.../name` (no extension) → resolved URL */
const byStem: Record<string, string> = {};
const priorityByStem: Record<string, number> = {};

for (const [path, url] of Object.entries(modules)) {
  const match = path.match(VIDEO_EXT);
  if (!match) continue;
  const stem = path.replace(VIDEO_EXT, '');
  const priority = EXT_PRIORITY[match[0].toLowerCase()] ?? 99;
  if (!(stem in byStem) || priority < priorityByStem[stem]) {
    byStem[stem] = url;
    priorityByStem[stem] = priority;
  }
}

function lookup(stemPath: string): string | undefined {
  return byStem[`/src/assets/${stemPath}`];
}

/**
 * Resolve a video under `src/assets` by path without requiring a fixed extension.
 * Pass e.g. `sign/sign-CNC` — finds `.mp4`, `.mov`, or `.gif`.
 *
 * Case-study layout (preferred when present):
 *   assets/<case>/mp4/<name>.mp4
 * Falls back to a flat file under `assets/<case>/<name>.*`.
 * Files in `originals/` are excluded from the build and never resolved.
 */
export function video(path: string): string {
  const cleaned = path.replace(/^\/?src\/assets\//, '').replace(VIDEO_EXT, '');

  const slash = cleaned.lastIndexOf('/');
  if (slash !== -1) {
    const dir = cleaned.slice(0, slash);
    const name = cleaned.slice(slash + 1);
    const fromMp4 = lookup(`${dir}/mp4/${name}`);
    if (fromMp4) return fromMp4;
  }

  const url = lookup(cleaned);
  if (!url) {
    throw new Error(
      `Video not found: "${path}" (expected mp4/ or flat mp4/mov/gif under src/assets)`,
    );
  }
  return url;
}
