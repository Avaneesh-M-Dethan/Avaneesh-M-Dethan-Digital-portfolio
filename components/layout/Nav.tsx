'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { chapters } from '@/content/social';
import { profile } from '@/content/profile';
import { getLenis } from '@/components/motion/MotionProvider';

const navItems = chapters.filter((c) => c.nav);

export function Nav() {
  const pathname = usePathname();
  const onHome = pathname === '/';
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('intro');
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const href = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  // Solid background once the page moves; active chapter from what is on screen.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    let io: IntersectionObserver | null = null;
    if (onHome) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive((e.target as HTMLElement).dataset.chapter || 'intro');
          });
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      document.querySelectorAll('[data-chapter]').forEach((el) => io?.observe(el));
    }
    return () => {
      window.removeEventListener('scroll', onScroll);
      io?.disconnect();
    };
  }, [onHome]);

  // Mobile menu: lock scroll, close on Escape, keep focus inside.
  useEffect(() => {
    const lenis = getLenis();
    if (!open) {
      lenis?.start();
      document.body.style.overflow = '';
      return;
    }
    lenis?.stop();
    document.body.style.overflow = 'hidden';
    const first = menuRef.current?.querySelector<HTMLElement>('a');
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === 'Tab' && menuRef.current) {
        const focusables = [toggleRef.current, ...Array.from(menuRef.current.querySelectorAll<HTMLElement>('a'))].filter(Boolean) as HTMLElement[];
        const i = focusables.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey && i <= 0) {
          e.preventDefault();
          focusables[focusables.length - 1].focus();
        } else if (!e.shiftKey && i === focusables.length - 1) {
          e.preventDefault();
          focusables[0].focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <a href="#main" className="mono sr-only z-[80] rounded bg-gold px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled && !open ? 'border-b border-[var(--line)] bg-ink/85 backdrop-blur-md' : 'border-b border-transparent'
        }`}
      >
        <nav aria-label="Main" className="shell flex h-[var(--nav-h)] items-center justify-between">
          <Link href="/" className="group flex items-baseline gap-3" aria-label={`${profile.name}, home`}>
            <span className="display text-[1.35rem] leading-none tracking-tight">
              A<em className="accent-gold">.</em>M<em className="accent-gold">.</em>D
            </span>
            <span className="mono faint hidden transition-colors group-hover:text-bone sm:inline">{profile.name}</span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((c) => {
              const isActive = onHome && active === c.id;
              return (
                <li key={c.id}>
                  <a href={href(c.id)} className={`mono link-line transition-colors ${isActive ? 'text-gold' : 'dim hover:text-bone'}`} aria-current={isActive ? 'location' : undefined}>
                    {c.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            ref={toggleRef}
            type="button"
            className="mono flex h-11 items-center gap-3 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span>{open ? 'Close' : 'Menu'}</span>
            <span className="relative block h-2.5 w-6" aria-hidden="true">
              <span className={`absolute left-0 block h-px w-6 bg-current transition-transform duration-500 ${open ? 'top-1 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 block h-px w-6 bg-current transition-transform duration-500 ${open ? 'top-1 -rotate-45' : 'top-2'}`} />
            </span>
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
        className="fixed inset-0 z-[55] bg-ink md:hidden"
      >
        <div className="shell flex h-full flex-col justify-between pb-10 pt-[calc(var(--nav-h)+40px)]">
          <ol className="flex flex-col gap-3">
            {navItems.map((c, i) => (
              <li key={c.id} className="intro-fade flex items-baseline gap-4 border-b border-[var(--line)] pb-3" style={{ animationDelay: `${60 + i * 50}ms` }}>
                <span className="mono accent-gold w-8">{c.number}</span>
                <a href={href(c.id)} onClick={() => setOpen(false)} className="display text-[2.6rem] leading-none">
                  {c.label}
                </a>
              </li>
            ))}
          </ol>
          <p className="mono faint">{profile.location}</p>
        </div>
      </div>
    </>
  );
}
