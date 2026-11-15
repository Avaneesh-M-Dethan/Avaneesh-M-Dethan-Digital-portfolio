'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
 * One motion system for the whole site:
 * - Lenis smooth scrolling (off for reduced motion)
 * - ScrollTrigger reveals for [data-reveal] = fade | lines | image | draw
 * - Light parallax for [data-parallax]
 * - Smooth in-page anchor links
 */
export function MotionProvider() {
  const pathname = usePathname();

  // Lenis + anchor handling: once per app lifetime.
  useEffect(() => {
    const reduced = prefersReducedMotion();
    if (!reduced) {
      lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      lenis.on('scroll', ScrollTrigger.update);
      const raf = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
      (window as unknown as { __lenisRaf?: typeof raf }).__lenisRaf = raf;
    }

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement).closest('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;
      const el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!el) return;
      e.preventDefault();
      history.pushState(null, '', url.hash);
      scrollToTarget(el);
      // Move focus for keyboard and screen-reader users without a second jump.
      el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      const raf = (window as unknown as { __lenisRaf?: (t: number) => void }).__lenisRaf;
      if (raf) gsap.ticker.remove(raf);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  // Reveals: re-scan on every route.
  useEffect(() => {
    const root = document.documentElement;
    if (prefersReducedMotion()) {
      root.classList.add('motion-ready');
      return;
    }
    let cancelled = false;
    let ctx: gsap.Context | null = null;

    // Arriving on a new page with a hash: jump there once layout settles.
    if (window.location.hash) {
      const el = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (el) requestAnimationFrame(() => lenis?.scrollTo(el, { immediate: true, offset: -8 }));
    } else {
      lenis?.scrollTo(0, { immediate: true });
    }

    const fontsReady = document.fonts?.status === 'loaded' ? Promise.resolve() : document.fonts?.ready ?? Promise.resolve();

    fontsReady.then(() => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        const ease = 'expo.out';
        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
          const kind = el.dataset.reveal;
          if (!kind || kind === 'done') return;
          const scrollTrigger: ScrollTrigger.Vars = { trigger: el, start: 'top 88%', once: true };
          // Mark the element done first, so the CSS "hidden" rule stops matching, then drop inline styles
          // (lets CSS hover transforms work again afterwards).
          const finish = (targets: gsap.TweenTarget, props: string) => () => {
            el.dataset.reveal = 'done';
            gsap.set(targets, { clearProps: props });
          };
          if (kind === 'lines') {
            const inner = el.querySelectorAll('.mask-inner');
            gsap.fromTo(inner, { yPercent: 108 }, { yPercent: 0, duration: 1.2, ease, stagger: 0.09, scrollTrigger, onComplete: finish(inner, 'transform') });
          } else if (kind === 'image') {
            gsap.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease, scrollTrigger, onComplete: finish(el, 'clipPath') });
            const img = el.querySelector('img');
            if (img) gsap.fromTo(img, { scale: 1.08 }, { scale: 1, duration: 1.8, ease, scrollTrigger, onComplete: () => { gsap.set(img, { clearProps: 'transform' }); } });
          } else if (kind === 'draw') {
            gsap.fromTo(el, { scaleX: 0 }, { scaleX: 1, duration: 1.4, ease, scrollTrigger, onComplete: finish(el, 'transform') });
          } else {
            gsap.fromTo(el, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 1.1, ease, scrollTrigger, onComplete: finish(el, 'transform,opacity') });
          }
        });

        // Timeline threads: a gold line that fills with scroll progress through its parent.
        gsap.utils.toArray<HTMLElement>('[data-thread]').forEach((el) => {
          gsap.fromTo(el, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: el.parentElement || el, start: 'top 70%', end: 'bottom 70%', scrub: 0.6 } });
        });

        gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
          const amount = Number(el.dataset.parallax || 6);
          gsap.fromTo(el, { yPercent: -amount }, { yPercent: amount, ease: 'none', scrollTrigger: { trigger: el.parentElement || el, start: 'top bottom', end: 'bottom top', scrub: true } });
        });
      });
      root.classList.add('motion-ready');
      ScrollTrigger.refresh();
    });

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener('load', onLoad);
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}
