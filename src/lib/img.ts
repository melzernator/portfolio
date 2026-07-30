/** Picture formats accepted when resolving assets under src/assets. */
const IMAGE_EXT = /\.(png|jpe?g|svg|webp)$/i;

/** Lower number = higher preference when multiple formats share a stem. */
const EXT_PRIORITY: Record<string, number> = {
  webp: 0,
  png: 1,
  jpg: 2,
  jpeg: 2,
  svg: 3,
};

// Include uppercase extensions (e.g. .JPG) — Vite's brace globs are case-sensitive.
const modules = import.meta.glob(
  '/src/assets/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,svg,SVG,webp,WEBP}',
  {
    eager: true,
    import: 'default',
  },
) as Record<string, string>;

/** Map of `/src/assets/.../name` (no extension) → resolved URL */
const byStem: Record<string, string> = {};
const stemPriority: Record<string, number> = {};

for (const [path, url] of Object.entries(modules)) {
  const match = path.match(IMAGE_EXT);
  if (!match) continue;
  const ext = match[1].toLowerCase();
  const stem = path.replace(IMAGE_EXT, '');
  const priority = EXT_PRIORITY[ext] ?? 99;
  if (!(stem in byStem) || priority < stemPriority[stem]) {
    byStem[stem] = url;
    stemPriority[stem] = priority;
  }
}

function lookup(stemPath: string): string | undefined {
  return byStem[`/src/assets/${stemPath}`];
}

/**
 * Resolve a picture under `src/assets` by path without requiring a fixed extension.
 * Pass e.g. `atas/atas-hero` or `skills/design.webp`.
 *
 * Case-study layout (preferred when present):
 *   assets/<case>/webp/<name>.webp
 *   assets/<case>/originals/<name>.{png,jpg,...}
 * Falls back to a flat file under `assets/<case>/<name>.*`.
 */
export function img(path: string): string {
  const cleaned = path.replace(/^\/?src\/assets\//, '').replace(IMAGE_EXT, '');

  const slash = cleaned.lastIndexOf('/');
  if (slash !== -1) {
    const dir = cleaned.slice(0, slash);
    const name = cleaned.slice(slash + 1);
    const fromWebp = lookup(`${dir}/webp/${name}`);
    if (fromWebp) return fromWebp;
    const fromOriginals = lookup(`${dir}/originals/${name}`);
    if (fromOriginals) return fromOriginals;
  }

  const url = lookup(cleaned);
  if (!url) {
    throw new Error(
      `Image not found: "${path}" (expected webp/, originals/, or flat png/jpg/jpeg/svg/webp under src/assets)`,
    );
  }
  return url;
}
