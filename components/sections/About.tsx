import { about } from '@/content/profile';
import { education } from '@/content/education';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Todo } from '@/components/ui/Todo';

export function About() {
  return (
    <section id="about" data-chapter="about" aria-labelledby="about-title" className="tone-ink">
      <div className="chapter shell">
        <SectionHeader id="about-title" number="02" label="About me" heading={about.heading} />

        <div className="mt-[clamp(56px,8vw,112px)] grid grid-cols-12 gap-x-6 gap-y-14">
          <div className="col-span-12 flex flex-col gap-7 md:col-span-7 lg:col-span-6">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? 'lead measure' : 'dim measure'} data-reveal="fade">
                {p}
              </p>
            ))}
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-4 lg:col-start-9" data-reveal="fade">
            <p className="mono faint mb-5">{about.interestsLabel}</p>
            <ul className="border-t border-[var(--line)]">
              {about.interests.map((t, i) => (
                <li key={t} className="flex items-baseline justify-between gap-4 border-b border-[var(--line)] py-3">
                  <span className="display text-[1.5rem] leading-tight">{t}</span>
                  <span className="mono faint">{String(i + 1).padStart(2, '0')}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Education: a light, paper-toned panel */}
      <div className="tone-bone on-light relative">
        <div className="shell py-[clamp(72px,10vw,140px)]">
          <div className="flex items-center gap-4">
            <span className="mono accent-gold">Education</span>
            <span className="hairline h-px flex-1 border-t" data-reveal="draw" />
            <span className="mono faint">A short timeline</span>
          </div>

          <ol className="relative mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
            <span aria-hidden="true" className="absolute left-[5px] top-2 h-[calc(100%-8px)] w-px bg-[var(--line-light)] md:left-0 md:top-[5px] md:h-px md:w-full" />
            <span aria-hidden="true" data-reveal="draw" className="absolute left-0 top-[5px] hidden h-px w-full bg-gold-deep md:block" />
            {education.map((e, i) => (
              <li key={e.title} className="relative pl-8 md:pl-0 md:pt-10" data-reveal="fade">
                <span aria-hidden="true" className={`absolute left-0 top-1.5 block h-[11px] w-[11px] rounded-full border md:top-0 ${i === education.length - 1 ? 'border-gold-deep bg-gold-deep' : 'border-[var(--color-paper-ink)] bg-bone'}`} />
                <p className="mono faint">{e.period ?? String(i + 1).padStart(2, '0')}</p>
                <h3 className="display h4 mt-3">{e.title}</h3>
                <p className="mono faint mt-2">{e.place}</p>
                <p className="dim mt-4 max-w-[38ch]">{e.body}</p>
                <Todo items={e.todo} className="mt-4" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
