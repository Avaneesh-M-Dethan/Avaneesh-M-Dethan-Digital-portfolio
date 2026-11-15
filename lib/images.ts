import manifest from '@/content/images.manifest.json';

export type ManifestEntry = { width: number; height: number; src: string; srcSet: string; blur: string };

const images = manifest as Record<string, ManifestEntry>;

export function getImage(key: string): ManifestEntry | null {
  return images[key] ?? null;
}
