import { getImage } from '@/lib/images';
import type { ImageRef } from '@/content/types';

type Props = {
  image: ImageRef;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  reveal?: boolean;
  /** Fill the parent's box instead of keeping the image's own aspect ratio. */
  fill?: boolean;
};

/** Manifest-aware responsive image. Renders nothing if the image has not been added yet. */
export function Img({ image, sizes = '100vw', priority, className = '', imgClassName = '', reveal = true, fill = false }: Props) {
  const entry = getImage(image.key);
  if (!entry) return null;
  return (
    <div
      className={`relative overflow-hidden bg-charcoal ${className}`}
      data-reveal={reveal ? 'image' : undefined}
      style={fill ? undefined : { aspectRatio: `${entry.width} / ${entry.height}` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static export: images are pre-optimised by scripts/optimize-images.mjs */}
      <img
        src={entry.src}
        srcSet={entry.srcSet}
        sizes={sizes}
        width={entry.width}
        height={entry.height}
        alt={image.alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        className={`${fill ? 'absolute inset-0' : ''} h-full w-full object-cover ${imgClassName}`}
        style={{ backgroundImage: `url(${entry.blur})`, backgroundSize: 'cover' }}
      />
    </div>
  );
}
