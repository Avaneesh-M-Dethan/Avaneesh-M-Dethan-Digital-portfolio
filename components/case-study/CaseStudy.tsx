import Link from 'next/link';
import type { Project } from '@/content/types';
import { Img } from '@/components/ui/Img';
import { Lines } from '@/components/ui/Lines';
import { Status } from '@/components/ui/Status';
import { Arrow } from '@/components/ui/Arrow';
import { Todo } from '@/components/ui/Todo';
import { BlockContent } from './BlockContent';
import { ProjectLinks } from './ProjectLinks';

type Props = {
  project: Project;
  back: { href: string; label: string };
  next?: { href: string; title: string; category: string };
};

/** Full case-study page for a featured project. */
export function CaseStudy({ project, back, next }: Props) {
  const facts = [
    ...(project.facts ?? []),
    ...(project.role ? [{ label: 'My role', value: project.role }] : []),
    ...(project.authorship ? [{ label: 'Work', value: project.authorship }] : []),
    ...(project.year ? [{ label: 'Year', value: project.year }] : []),
  ];

  return (
    <article className="tone-ink">
      {/* Opening */}
      <header className="shell pb-[clamp(48px,7vw,96px)] pt-[calc(var(--nav-h)+clamp(40px,7vw,96px))]">
        <Link href={back.href} className="mono faint group inline-flex min-h-11 items-center gap-3 transition-colors hover:text-bone">
          <Arrow direction="left" /> <span className="link-line">{back.label}</span>
        </Link>

        <div className="intro-fade mt-10 flex flex-wrap items-center gap-x-6 gap-y-3" style={{ animationDelay: '100ms' }}>
          <span className="mono accent-gold">{project.index}</span>
          <span className="mono faint">{project.category}</span>
          <Status status={project.status} />
        </div>

        <h1 className="display mt-6 text-[clamp(3.2rem,10vw,9.5rem)] leading-[0.9] tracking-[-0.02em]">
          <span className="mask">
            <span className="mask-inner intro-rise" style={{ animationDelay: '150ms' }}>{project.title}</span>
          </span>
        </h1>
        {project.subtitle ? (
          <p className="display intro-fade mt-5 text-[clamp(1.5rem,3vw,2.4rem)] italic leading-tight text-gold" style={{ animationDelay: '300ms' }}>
            {project.subtitle}
          </p>
        ) : null}

        <div className="intro-fade mt-12 grid grid-cols-12 gap-x-6 gap-y-10" style={{ animationDelay: '420ms' }}>
          <p className="lead measure col-span-12 lg:col-span-6">{project.summary}</p>
          <dl className="col-span-12 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:col-span-5 lg:col-start-8 lg:grid-cols-2">
            {facts.map((f) => (
              <div key={f.label} className="hairline border-t pt-3">
                <dt className="mono faint">{f.label}</dt>
                <dd className="mt-1.5 text-[0.98rem]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ProjectLinks links={project.links} className="intro-fade mt-10" />
      </header>

      {/* Cover */}
      {project.cover ? (
        <div className="shell">
          <Img image={project.cover} priority reveal={false} sizes="(min-width: 1440px) 1300px, 100vw" className={isPhone(project) ? 'mx-auto max-w-[520px]' : ''} />
        </div>
      ) : project.coverType ? (
        <div className="shell">
          <div className="intro-fade flex min-h-[44vh] flex-col justify-end rounded-sm bg-charcoal p-[clamp(24px,5vw,72px)]">
            <p className="display text-[clamp(2.8rem,8vw,7.5rem)] italic leading-[0.92] text-gold">{project.coverType.display}</p>
            <p className="mono faint mt-8">{project.coverType.caption}</p>
          </div>
        </div>
      ) : null}

      {project.note ? (
        <div className="shell mt-10">
          <p className="mono flex items-start gap-3 rounded-sm border border-gold/40 px-5 py-4 leading-relaxed text-gold" role="note">
            <span aria-hidden="true">◆</span>
            <span className="normal-case tracking-[0.04em]">{project.note}</span>
          </p>
        </div>
      ) : null}

      {/* Body */}
      <div className="shell py-[clamp(72px,10vw,150px)]">
        <div className="flex flex-col gap-[clamp(56px,8vw,112px)]">
          {project.sections.map((block, i) => (
            <section key={block.heading} className="grid grid-cols-12 gap-x-6 gap-y-6" aria-labelledby={`s-${i}`}>
              <div className="col-span-12 lg:col-span-4">
                <div className="lg:sticky lg:top-[calc(var(--nav-h)+32px)]">
                  <p className="mono faint">{String(i + 1).padStart(2, '0')}</p>
                  <h2 id={`s-${i}`} className="display h3 mt-3">
                    <Lines lines={[block.heading]} />
                  </h2>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-8">
                <BlockContent block={block} />
              </div>
            </section>
          ))}

          {project.tools?.length ? (
            <section className="grid grid-cols-12 gap-x-6 gap-y-6" aria-label="Tools and methods">
              <p className="mono faint col-span-12 lg:col-span-4">Tools and methods</p>
              <ul className="col-span-12 flex flex-wrap gap-2 lg:col-span-8" data-reveal="fade">
                {project.tools.map((t) => (
                  <li key={t} className="mono rounded-full border border-[var(--line)] px-3.5 py-2 text-[var(--dim)]">
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <Todo items={project.todo} />
        </div>
      </div>

      {/* Gallery */}
      {project.gallery?.length ? (
        <div className="shell pb-[clamp(72px,10vw,150px)]">
          <div className={`grid items-start gap-6 ${project.gallery.length > 1 ? "md:grid-cols-2" : ""}`}>
            {project.gallery.map((g, gi) => (
              <figure key={g.key} className={`flex flex-col ${project.gallery!.length % 2 === 1 && gi === 0 ? "md:col-span-2" : ""}`}>
                <div className="flex items-center justify-center bg-[var(--panel)] p-[clamp(0px,2vw,24px)]">
                  <Img image={g} sizes="(min-width: 768px) 50vw, 100vw" className={tall(g.key) ? 'max-h-[80vh] w-auto max-w-full' : 'w-full'} />
                </div>
                {g.caption ? <figcaption className="mono faint mt-4">{g.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        </div>
      ) : null}

      {/* Next */}
      {next ? (
        <nav aria-label="Next case study" className="border-t border-[var(--line)]">
          <Link href={next.href} className="group shell flex flex-col gap-4 py-[clamp(56px,8vw,112px)] sm:flex-row sm:items-end sm:justify-between">
            <span>
              <span className="mono faint block">Next · {next.category}</span>
              <span className="display mt-4 block text-[clamp(2.6rem,7vw,6.5rem)] leading-none transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-3">
                {next.title}
              </span>
            </span>
            <span className="grid h-16 w-16 flex-none place-items-center rounded-full border border-[var(--line)] transition-colors duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
              <Arrow />
            </span>
          </Link>
        </nav>
      ) : null}
    </article>
  );
}

const isPhone = (p: Project) => p.cover?.key.includes('angadi');
const tall = (key: string) => key.includes('angadi') || key.includes('mobile');
