'use client';

import { scrollToTarget } from '@/components/motion/MotionProvider';
import { Arrow } from '@/components/ui/Arrow';

export function BackToTop({ className = '' }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        scrollToTarget(0);
        document.getElementById('main')?.focus({ preventScroll: true });
      }}
      className={`mono group inline-flex min-h-11 items-center gap-3 text-bone ${className}`}
    >
      <span className="link-line">Back to top</span>
      <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] transition-colors duration-500 group-hover:border-gold group-hover:text-gold">
        <Arrow direction="up" />
      </span>
    </button>
  );
}
