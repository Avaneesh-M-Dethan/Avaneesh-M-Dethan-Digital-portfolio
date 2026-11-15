import { nextChapter } from '@/content/next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Exploring } from './Exploring';

export function NextChapter() {
  return (
    <section id="next" data-chapter="next" aria-labelledby="next-title" className="tone-ink">
      <div className="chapter shell">
        <SectionHeader id="next-title" number="07" label="The next chapter" heading={nextChapter.heading} body={nextChapter.body} />

        <div className="mt-[clamp(64px,9vw,128px)]">
          <Exploring label={nextChapter.exploringLabel} topics={nextChapter.exploring} />
        </div>

        <div className="mt-[clamp(72px,9vw,128px)] grid grid-cols-12 gap-x-6 gap-y-14">
          <div className="col-span-12 md:col-span-6 lg:col-span-5" data-reveal="fade">
            <p className="mono faint mb-4">{nextChapter.skillsLabel}</p>
            <ul className="hairline border-t">
              {nextChapter.skills.map((s) => (
                <li key={s} className="hairline flex gap-4 border-b py-4">
                  <span aria-hidden="true" className="mt-[0.75em] block h-px w-4 flex-none bg-gold" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8" data-reveal="fade">
            <p className="mono faint mb-4">{nextChapter.inProgressLabel}</p>
            <ul className="hairline border-t">
              {nextChapter.inProgress.map((p) => (
                <li key={p.title} className="hairline flex items-baseline justify-between gap-6 border-b py-4">
                  <span className="display text-[1.6rem] leading-tight">{p.title}</span>
                  <span className="dim text-right text-[0.95rem]">{p.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="display h3 mt-[clamp(72px,9vw,128px)] max-w-[28ch] italic" data-reveal="fade">
          {nextChapter.ambition}
        </p>
      </div>
    </section>
  );
}
