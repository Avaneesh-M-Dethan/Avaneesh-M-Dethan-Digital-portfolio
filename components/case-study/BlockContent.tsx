import type { Block } from '@/content/types';
import { Todo } from '@/components/ui/Todo';

/** Renders one content block: paragraphs, bullet points, item grids, sequences, figures and quotes. */
export function BlockContent({ block, compact = false }: { block: Block; compact?: boolean }) {
  const reveal = compact ? undefined : 'fade';
  return (
    <div className="flex flex-col gap-6">
      {block.body?.map((p, i) => (
        <p key={i} className={`measure ${!compact && i === 0 && !block.items ? 'lead' : 'dim'}`} data-reveal={reveal}>
          {p}
        </p>
      ))}

      {block.points ? (
        <ul className="flex flex-col border-t border-[var(--line)]" data-reveal={reveal}>
          {block.points.map((p) => (
            <li key={p} className="hairline flex gap-4 border-b py-3.5">
              <span aria-hidden="true" className="mt-[0.7em] block h-px w-4 flex-none bg-gold" />
              <span className="dim">{p}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {block.items ? <Items block={block} reveal={reveal} /> : null}

      {block.quote ? (
        <blockquote className="border-l border-gold pl-6" data-reveal={reveal}>
          <p className="display h3 italic">“{block.quote.text}”</p>
          {block.quote.source ? <footer className="mono faint mt-4">{block.quote.source}</footer> : null}
        </blockquote>
      ) : null}

      <Todo items={block.todo} />
    </div>
  );
}

function Items({ block, reveal }: { block: Block; reveal?: string }) {
  const items = block.items ?? [];
  if (block.itemStyle === 'figures') {
    return (
      <dl className="grid border-l border-t border-[var(--line)] sm:grid-cols-3" data-reveal={reveal}>
        {items.map((it) => (
          <div key={it.label} className="flex flex-col gap-3 border-b border-r border-[var(--line)] bg-[var(--panel)] p-6">
            <dt className="display text-[clamp(2rem,3.4vw,3rem)] leading-none text-gold">{it.label}</dt>
            <dd className="dim text-[0.95rem] leading-snug">{it.body}</dd>
          </div>
        ))}
      </dl>
    );
  }
  if (block.itemStyle === 'sequence') {
    return (
      <ol className="flex flex-col" data-reveal={reveal}>
        {items.map((it) => (
          <li key={it.label + (it.title ?? '')} className="hairline grid grid-cols-[4.5rem_1fr] gap-4 border-t py-5 sm:grid-cols-[7rem_1fr]">
            <span className="mono accent-gold pt-1.5">{it.label}</span>
            <div>
              {it.title ? <p className="display text-[1.6rem] leading-tight">{it.title}</p> : null}
              {it.body ? <p className="dim mt-1.5 measure">{it.body}</p> : null}
            </div>
          </li>
        ))}
      </ol>
    );
  }
  return (
    <ul className={`grid border-l border-t border-[var(--line)] ${items.length > 3 ? 'sm:grid-cols-2 xl:grid-cols-3' : 'sm:grid-cols-3'}`} data-reveal={reveal}>
      {items.map((it, i) => (
        <li key={it.label + i} className="flex flex-col gap-3 border-b border-r border-[var(--line)] bg-[var(--panel)] p-6">
          <div className="flex items-baseline justify-between gap-3">
            <span className="display text-[1.9rem] italic leading-none text-gold">{it.label}</span>
            {it.tag ? <span className="mono faint text-right">{it.tag}</span> : null}
          </div>
          {it.title ? <p className="mono faint">{it.title}</p> : null}
          {it.body ? <p className="dim text-[0.98rem] leading-relaxed">{it.body}</p> : null}
        </li>
      ))}
    </ul>
  );
}
