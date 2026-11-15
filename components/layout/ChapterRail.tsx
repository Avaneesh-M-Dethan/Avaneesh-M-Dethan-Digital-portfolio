'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { chapters } from '@/content/social';

/**
 * Signature detail: a quiet chapter rail on the right edge (desktop) that fills with a gold
 * thread as you read, and names the current chapter in italic serif. On mobile it becomes a
 * one-pixel gold progress line under the navigation.
 */
export function ChapterRail() {
  const pathname = usePathname();
  const threadRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (threadRef.current) threadRef.current.style.transform = `scaleY(${p})`;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const i = chapters.findIndex((c) => c.id === (e.target as HTMLElement).dataset.chapter);
          if (i >= 0) setActive(i);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    document.querySelectorAll('[data-chapter]').forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
      io.disconnect();
    };
  }, [pathname]);

  const onHome = pathname === '/';
  const current = chapters[active];

  return (
    <>
      {/* Mobile and tablet: progress hairline */}
      <span aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-[var(--nav-h)] z-[61] h-px lg:hidden">
        <span ref={barRef} className="block h-full origin-left bg-gold" style={{ transform: 'scaleX(0)' }} />
      </span>

      {/* Desktop: chapter rail */}
      <aside aria-hidden="true" className="pointer-events-none fixed right-[clamp(14px,1.6vw,28px)] top-1/2 z-50 hidden -translate-y-1/2 lg:block">
        <div className="relative flex flex-col items-center gap-[clamp(10px,1.6vh,18px)] py-2">
          <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[var(--line)] mix-blend-difference" />
          <span ref={threadRef} className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 origin-top bg-gold" style={{ transform: 'scaleY(0)' }} />
          {chapters.map((c, i) => (
            <span
              key={c.id}
              className={`relative block h-[5px] w-[5px] rounded-full transition-all duration-700 ${
                onHome && i === active ? 'scale-[1.6] bg-gold' : i <= active && onHome ? 'bg-gold/70' : 'bg-[#6b6b6b]'
              }`}
            />
          ))}
        </div>
        {onHome ? (
          <div className="absolute right-[18px] top-1/2 flex origin-right -translate-y-1/2 items-baseline gap-3 whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
            <span className="mono text-[0.6rem] text-[#8d8d8d] mix-blend-difference">{current.number}</span>
            <span key={current.id} className="display intro-fade text-[0.95rem] italic text-[#a8a8a8] mix-blend-difference">
              {current.label}
            </span>
          </div>
        ) : null}
      </aside>
    </>
  );
}
