'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

let lenis: Lenis | null = null;
export const getLenis = () => lenis;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Smooth-scrolls to an in-page target, honouring reduced motion. */
export function scrollToTarget(target: string | HTMLElement | number) {
  if (lenis) {
    lenis.scrollTo(target, { offset: typeof target === 'number' ? 0 : -8, duration: 1.4 });
    return;
  }
  if (typeof target === 'number') window.scrollTo({ top: target });
  else {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    el?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  }
}

/**
 * One lightweight motion system for the whole site:
 * - Lenis smooth scrolling (off for reduced motion)
 * - Scroll reveals for [data-reveal] = fade | lines | image | draw. An IntersectionObserver adds
 *   [data-shown]; CSS transitions do the animating (see app/globals.css). No layout reads per element.
 * - [data-thread]: a timeline line that fills with scroll progress through its parent
 * - Smooth in-page anchor links that also move keyboard focus
 */
export function MotionProvider() {
  const pathname = usePathname();

  // Lenis + anchor handling: once per app lifetime.
  useEffect(() => {
    if (!prefersReducedMotion()) {
      lenis = new Lenis({ duration: 1.15, autoRaf: true, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    }

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement).closest('a');
      if (!a) return;
      const url = new URL(a.getAttribute('href') || '', window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;
      const el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!el) return;
      e.preventDefault();
      history.pushState(null, '', url.hash);
      scrollToTarget(el);
      el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  // Per route: position, reveals, threads.
  useEffect(() => {
    const root = document.documentElement;

    if (window.location.hash) {
      const el = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (el) requestAnimationFrame(() => lenis?.scrollTo(el, { immediate: true, offset: -8 }));
    } else {
      lenis?.scrollTo(0, { immediate: true });
    }

    const reveals = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-shown])'));
    let io: IntersectionObserver | null = null;
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.setAttribute('data-shown', ''));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.setAttribute('data-shown', '');
            io?.unobserve(entry.target);
          });
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.01 },
      );
      reveals.forEach((el) => io?.observe(el));
    }
    root.classList.add('motion-ready');

    // Threads: read every rect first, then write every transform, once per frame.
    const threads = Array.from(document.querySelectorAll<HTMLElement>('[data-thread]'));
    let frame = 0;
    const updateThreads = () => {
      frame = 0;
      const vh = window.innerHeight * 0.7;
      const values = threads.map((t) => {
        const r = (t.parentElement || t).getBoundingClientRect();
        return Math.min(1, Math.max(0, (vh - r.top) / (r.height || 1)));
      });
      threads.forEach((t, i) => (t.style.transform = `scaleY(${values[i]})`));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateThreads);
    };
    if (threads.length) {
      if (prefersReducedMotion()) threads.forEach((t) => (t.style.transform = 'none'));
      else {
        updateThreads();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
      }
    }

    return () => {
      io?.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
