'use client';

import { useId, useState } from 'react';

type Topic = { topic: string; note: string };

/** "Currently exploring": pick a topic to read why it is on my mind. Edit topics in content/next.ts. */
export function Exploring({ label, topics }: { label: string; topics: Topic[] }) {
  const [active, setActive] = useState(0);
  const panelId = useId();
  const current = topics[active];

  return (
    <div className="grid grid-cols-12 gap-x-6 gap-y-10 rounded-sm border border-[var(--line)] p-[clamp(20px,4vw,56px)]" data-reveal="fade">
      <div className="col-span-12 lg:col-span-7">
        <p className="mono accent-gold mb-6 flex items-center gap-3">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-50 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          {label}
        </p>
        <ul className="flex flex-wrap gap-2.5" aria-label={label}>
          {topics.map((t, i) => {
            const on = i === active;
            return (
              <li key={t.topic}>
                <button
                  type="button"
                  aria-pressed={on}
                  aria-controls={panelId}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`min-h-11 rounded-full border px-4 py-2 text-[0.95rem] transition-[background-color,color,border-color] duration-500 ${
                    on ? 'border-gold bg-gold text-ink' : 'border-[var(--line)] text-bone hover:border-gold'
                  }`}
                >
                  {t.topic}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div id={panelId} aria-live="polite" className="col-span-12 flex flex-col justify-end lg:col-span-4 lg:col-start-9">
        <p className="mono faint">{String(active + 1).padStart(2, '0')} / {String(topics.length).padStart(2, '0')}</p>
        <p key={current.topic} className="display intro-fade mt-3 text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.15]">
          {current.note}
        </p>
      </div>
    </div>
  );
}
