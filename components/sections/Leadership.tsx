import { leadership, leadershipIntro } from '@/content/leadership';
import type { LeadershipEntry } from '@/content/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Status } from '@/components/ui/Status';
import { Todo } from '@/components/ui/Todo';
import { Img } from '@/components/ui/Img';
import { AwardMark } from '@/components/ui/AwardMark';

export function Leadership() {
  return (
    <section id="leadership" data-chapter="leadership" aria-labelledby="leadership-title" className="tone-charcoal">
      <div className="chapter shell">
        <SectionHeader id="leadership-title" number="03" label="Leadership & initiative" heading={leadershipIntro.heading} body={leadershipIntro.body} />

        <ol className="relative mt-[clamp(56px,8vw,112px)]">
          {/* Timeline thread that fills as you scroll */}
          <span aria-hidden="true" className="absolute bottom-0 left-[11px] top-0 w-px bg-[var(--line)] md:left-[calc(25%-12px)]" />
          <span aria-hidden="true" data-thread className="absolute bottom-0 left-[11px] top-0 w-px origin-top bg-gold md:left-[calc(25%-12px)]" />
          {leadership.map((entry) => (
            <Entry key={entry.id} entry={entry} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function Entry({ entry }: { entry: LeadershipEntry }) {
  return (
    <li id={entry.id} className="relative grid scroll-mt-[calc(var(--nav-h)+24px)] grid-cols-12 gap-x-6 gap-y-6 pb-[clamp(56px,7vw,104px)] pl-10 last:pb-0 md:pl-0">
      <span aria-hidden="true" className="absolute left-[6px] top-3 h-[11px] w-[11px] rounded-full border border-gold bg-charcoal md:left-[calc(25%-17px)]" />

      <div className="col-span-12 md:col-span-3 md:pr-10" data-reveal="fade">
        <span className="display block text-[clamp(3.5rem,7vw,6.5rem)] italic leading-[0.8] text-gold/90">{entry.marker}</span>
        {entry.period ? <p className="mono faint mt-4">{entry.period}</p> : null}
        {entry.status ? <Status status={entry.status} className="mt-4" /> : null}
      </div>

      <div className="col-span-12 md:col-span-9 md:pl-8 lg:col-span-8">
        <div data-reveal="fade">
          <p className="mono faint">{entry.organisation}</p>
          <h3 className="display h2 mt-3">{entry.role}</h3>
        </div>

        {entry.awards ? (
          <div className="mt-8" data-reveal="fade">
            <AwardMark title={entry.awards.title} count={entry.awards.count} />
          </div>
        ) : null}

        <div className="mt-7 flex flex-col gap-5">
          {entry.body.map((p, i) => (
            <p key={i} className={`measure ${i === 0 ? 'lead' : 'dim'}`} data-reveal="fade">
              {p}
            </p>
          ))}
        </div>

        <ul className="mt-8 flex flex-wrap gap-2" data-reveal="fade" aria-label="Themes">
          {entry.themes.map((t) => (
            <li key={t} className="mono rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.65rem] text-[var(--text-dim)]">
              {t}
            </li>
          ))}
        </ul>

        {entry.photos?.length ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {entry.photos.map((ph) => (
              <figure key={ph.key}>
                <Img image={ph} sizes="(min-width: 768px) 33vw, 100vw" />
                {ph.caption ? <figcaption className="mono faint mt-3">{ph.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        ) : null}

        <Todo items={entry.todo} className="mt-8" />
      </div>
    </li>
  );
}

