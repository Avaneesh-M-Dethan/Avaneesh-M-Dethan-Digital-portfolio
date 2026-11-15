import { beyond } from '@/content/beyond';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AwardMark } from '@/components/ui/AwardMark';
import { Img } from '@/components/ui/Img';
import { Todo } from '@/components/ui/Todo';

export function Beyond() {
  return (
    <section id="beyond" data-chapter="beyond" aria-labelledby="beyond-title" className="tone-charcoal grain relative overflow-hidden">
      <div className="chapter shell relative">
        <SectionHeader id="beyond-title" number="06" label="Beyond the work" heading={beyond.heading} body={beyond.body} />

        {/* Sports: a big typographic list that responds to hover */}
        <div className="mt-[clamp(64px,9vw,128px)] grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 lg:col-span-7">
            <p className="mono faint mb-4">{beyond.sportsLabel}</p>
            <ul className="hairline border-t">
              {beyond.sports.map((s, i) => (
                <li key={s.name} className="group hairline flex items-baseline justify-between gap-6 border-b py-4" data-reveal="fade">
                  <span className="flex items-baseline gap-5">
                    <span className="mono faint w-6">{String(i + 1).padStart(2, '0')}</span>
                    <span className="display text-[clamp(2.2rem,5vw,4.25rem)] leading-none transition-[transform,color] duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-3 group-hover:text-gold">
                      {s.name}
                    </span>
                  </span>
                  <span className="mono faint">{s.tag}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 flex flex-col gap-10 lg:col-span-4 lg:col-start-9">
            <div className="rounded-sm border border-[var(--line)] p-7" data-reveal="fade">
              <p className="mono faint">An interest, not just a role</p>
              <h3 className="display h3 mt-4">{beyond.mun.title}</h3>
              <p className="dim mt-4">{beyond.mun.body}</p>
              <div className="mt-7">
                <AwardMark title="Best Delegate" count={beyond.mun.awardCount} compact />
              </div>
            </div>

            <div data-reveal="fade">
              <p className="mono faint mb-4">{beyond.interestsLabel}</p>
              <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-1">
                {beyond.interests.map((it) => (
                  <li key={it.name} className="bg-[var(--panel)] p-5">
                    <p className="display text-[1.4rem] leading-tight">{it.name}</p>
                    <p className="dim mt-1.5 text-[0.95rem]">{it.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Photos appear only when real ones are added. */}
        {beyond.photos.length ? (
          <div className="mt-[clamp(56px,8vw,112px)] grid grid-cols-2 gap-4 md:grid-cols-4">
            {beyond.photos.map((ph, i) => (
              <figure key={ph.key} className={i % 3 === 0 ? 'md:col-span-2' : ''}>
                <Img image={ph} sizes="(min-width: 768px) 25vw, 50vw" />
                {ph.caption ? <figcaption className="mono faint mt-3">{ph.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        ) : (
          <Todo items={beyond.todo} className="mt-12" />
        )}
      </div>
    </section>
  );
}
