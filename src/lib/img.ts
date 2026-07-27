/** Picture formats accepted when resolving assets under src/assets. */
const IMAGE_EXT = /\.(png|jpe?g|svg|webp)$/i;

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

for (const [path, url] of Object.entries(modules)) {
  const stem = path.replace(IMAGE_EXT, '');
  if (!(stem in byStem)) byStem[stem] = url;
}

/**
 * Resolve a picture under `src/assets` by path without requiring a fixed extension.
 * Pass e.g. `atas/atas-hero` or `skills/design.webp` — finds `.png`, `.jpg`, `.jpeg`, `.svg`, or `.webp`.
 */
export function img(path: string): string {
  const cleaned = path.replace(/^\/?src\/assets\//, '').replace(IMAGE_EXT, '');
  const url = byStem[`/src/assets/${cleaned}`];
  if (!url) {
    throw new Error(
      `Image not found: "${path}" (expected png, jpg, jpeg, svg, or webp under src/assets)`,
    );
  }
  return url;
}
