'use client';

import { useId, useState, type ReactNode } from 'react';
import type { Status as StatusType } from '@/content/types';
import { Status } from '@/components/ui/Status';

type Props = {
  index: string;
  title: string;
  category: string;
  summary: string;
  status: StatusType;
  /** Expanded details. Rows without details are static. */
  children?: ReactNode;
  /** Optional screenshot that floats beside the title on hover (desktop pointer devices only). */
  preview?: { src: string; width: number; height: number };
};

/** A typographic project row. Expands in place to show details; an optional screenshot previews on hover. */
export function IndexRow({ index, title, category, summary, status, children, preview }: Props) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const expandable = Boolean(children);

  const head = (
    <>
      <span className="mono accent-gold pt-[0.55em] md:col-span-1">{index}</span>
      <span className="relative flex flex-col gap-2 md:col-span-6">
        {preview && !open ? (
          // eslint-disable-next-line @next/next/no-img-element -- decorative hover preview; the same image is in the expanded panel with alt text
          <img
            src={preview.src}
            width={preview.width}
            height={preview.height}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="pointer-events-none absolute left-[55%] top-1/2 z-10 hidden max-h-[220px] w-auto max-w-[340px] -translate-y-1/2 translate-x-4 rotate-[-1.5deg] rounded-sm opacity-0 shadow-[0_30px_80px_rgba(0,0,0,0.55)] ring-1 ring-[var(--line)] transition-[opacity,transform] duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 [@media(hover:hover)_and_(min-width:1024px)]:block"
          />
        ) : null}
        <span className="display h3 transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-1.5">{title}</span>
        <span className="mono faint">{category}</span>
      </span>
      <span className="dim hidden text-[0.98rem] md:col-span-3 md:block">{summary}</span>
      <span className="flex items-start justify-between gap-4 md:col-span-2 md:flex-col md:items-end">
        <Status status={status} />
        {expandable ? (
          <span aria-hidden="true" className="relative mt-1 block h-4 w-4 flex-none">
            <span className="absolute left-0 top-1/2 h-px w-4 bg-current" />
            <span className={`absolute left-1/2 top-0 h-4 w-px bg-current transition-transform duration-500 ${open ? 'scale-y-0' : ''}`} />
          </span>
        ) : null}
      </span>
    </>
  );

  return (
    <li className="hairline border-b" data-reveal="fade">
      {expandable ? (
        <button
          type="button"
          className="group grid w-full grid-cols-1 gap-x-6 gap-y-3 py-7 text-left md:grid-cols-12"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((o) => !o)}
        >
          {head}
        </button>
      ) : (
        <div className="group grid grid-cols-1 gap-x-6 gap-y-3 py-7 md:grid-cols-12">{head}</div>
      )}
      <p className="dim -mt-3 pb-7 text-[0.98rem] md:hidden">{summary}</p>
      {expandable ? (
        <div id={id} className="expand" data-open={open} role="region" aria-label={`${title} details`} inert={!open}>
          <div className="expand-inner">
            <div className="pb-10 md:pl-[calc(100%/12+1.5rem)]">{children}</div>
          </div>
        </div>
      ) : null}
    </li>
  );
}
