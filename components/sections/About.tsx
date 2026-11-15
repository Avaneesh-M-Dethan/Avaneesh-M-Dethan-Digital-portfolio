import { about } from '@/content/profile';
import Link from 'next/link';
import { education, timelineIntro } from '@/content/education';
import { Arrow } from '@/components/ui/Arrow';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Todo } from '@/components/ui/Todo';
import { Img } from '@/components/ui/Img';

export function About() {
  return (
    <section id="about" data-chapter="about" aria-labelledby="about-title" className="tone-ink">
      <div className="chapter shell">
        <SectionHeader id="about-title" number="02" label="About me" heading={about.heading} />

        <div className="mt-[clamp(56px,8vw,112px)] grid grid-cols-12 gap-x-6 gap-y-14">
          {/* Portrait: offset down on desktop for an editorial, staggered feel */}
          <figure className="col-span-12 max-w-[440px] sm:col-span-8 md:col-span-5 md:max-w-none lg:col-span-4 lg:mt-24">
            <div className="overflow-hidden">
              <Img image={about.photo} sizes="(min-width: 1024px) 30vw, (min-width: 768px) 40vw, 90vw" imgClassName="grayscale-[25%]" />
            </div>
          </figure>

          <div className="col-span-12 md:col-span-7 lg:col-span-7 lg:col-start-6">
            <div className="flex flex-col gap-7">
              {about.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? 'lead measure' : 'dim measure'} data-reveal="fade">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-14" data-reveal="fade">
              <p className="mono faint mb-5">{about.interestsLabel}</p>
              <ul className="grid border-t border-[var(--line)] sm:grid-cols-2 sm:gap-x-8">
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
      </div>

      {/* Timeline: a light, paper-toned panel. Every entry links to where it is told in full. */}
      <div className="tone-bone on-light relative">
        <div className="shell py-[clamp(72px,10vw,140px)]">
          <div className="flex items-center gap-4">
            <span className="mono accent-gold">{timelineIntro.label}</span>
            <span className="hairline h-px flex-1 border-t" data-reveal="draw" />
            <span className="mono faint">{timelineIntro.note}</span>
          </div>

          <ol className="relative mt-14 grid gap-10 lg:grid-cols-5 lg:gap-6">
            <span aria-hidden="true" className="absolute left-[5px] top-2 h-[calc(100%-8px)] w-px bg-[var(--line-light)] lg:left-0 lg:top-[5px] lg:h-px lg:w-full" />
            <span aria-hidden="true" data-reveal="draw" className="absolute left-0 top-[5px] hidden h-px w-full bg-gold-deep lg:block" />
            {education.map((e, i) => (
              <li key={e.title} className="relative pl-8 lg:pl-0 lg:pt-10" data-reveal="fade">
                <span aria-hidden="true" className={`absolute left-0 top-1.5 block h-[11px] w-[11px] rounded-full border lg:top-0 ${i === education.length - 1 ? 'border-gold-deep bg-gold-deep' : 'border-[var(--color-paper-ink)] bg-bone'}`} />
                <Link href={e.href} className="group block">
                  <p className="mono faint">{e.period ?? String(i + 1).padStart(2, '0')}</p>
                  <h3 className="display h4 mt-3 transition-colors duration-500 group-hover:text-gold-deep">{e.title}</h3>
                  <p className="mono faint mt-2">{e.place}</p>
                  <p className="dim mt-4 max-w-[38ch] text-[0.98rem]">{e.body}</p>
                  <span className="mono mt-5 inline-flex items-center gap-2.5 border-b border-current pb-1 text-gold-deep">
                    {e.linkLabel} <Arrow />
                  </span>
                </Link>
                <Todo items={e.todo} className="mt-4" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
