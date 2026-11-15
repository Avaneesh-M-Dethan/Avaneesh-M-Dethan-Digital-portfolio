import { academicIntro, courses, curriculum, workingGroup } from '@/content/academic';
import type { Project } from '@/content/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Status } from '@/components/ui/Status';
import { Arrow } from '@/components/ui/Arrow';
import { Img } from '@/components/ui/Img';
import { Todo } from '@/components/ui/Todo';
import { DidLearnt } from '@/components/ui/DidLearnt';

/** Course folios on a paper-toned page: each project shows what we did, what I learnt, and its Drive link. */
export function Academic() {
  return (
    <section id="academic" data-chapter="academic" aria-labelledby="academic-title" className="tone-bone on-light">
      <div className="chapter shell">
        <SectionHeader id="academic-title" number="04" label="Academic projects & research" heading={academicIntro.heading} body={academicIntro.body} />

        <div className="mt-10 flex flex-col items-start gap-4 lg:items-end" data-reveal="fade">
          <a href={academicIntro.folder.href} target="_blank" rel="noopener noreferrer" className="btn-line">
            {academicIntro.folder.label} <Arrow direction="up-right" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <p className="mono faint max-w-[60ch] lg:text-right">{workingGroup}</p>
        </div>

        {/* Curriculum: every subject, with a jump to its projects where there are any */}
        <div className="mt-[clamp(56px,8vw,112px)]" data-reveal="fade">
          <div className="flex items-center gap-4">
            <span className="mono accent-gold">{curriculum.label}</span>
            <span className="hairline h-px flex-1 border-t" />
            <span className="mono faint">{curriculum.note}</span>
          </div>
          <ul className="mt-8 grid border-l border-t border-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {curriculum.courses.map((c) => {
              const inner = (
                <>
                  <span className="mono accent-gold min-h-[1.1em]">{c.code ?? ''}</span>
                  <span className="display mt-3 block text-[1.6rem] leading-tight">{c.name}</span>
                  {c.href ? (
                    <span className="mono faint mt-auto inline-flex items-center gap-2 pt-6 transition-colors duration-500 group-hover:text-[var(--accent)]">
                      See the projects <Arrow />
                    </span>
                  ) : null}
                </>
              );
              return (
                <li key={c.name} className="border-b border-r border-[var(--line)]">
                  {c.href ? (
                    <a href={c.href} className="group flex h-full min-h-[150px] flex-col p-6 transition-colors duration-500 hover:bg-[var(--panel)]">{inner}</a>
                  ) : (
                    <div className="flex h-full min-h-[150px] flex-col p-6">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-[clamp(72px,9vw,128px)] flex flex-col gap-[clamp(72px,9vw,128px)]">
          {courses.map((course) => (
            <article key={course.code} className="grid grid-cols-12 gap-x-6 gap-y-10" aria-labelledby={`course-${course.code}`}>
              <header className="col-span-12 lg:col-span-3">
                <div className="lg:sticky lg:top-[calc(var(--nav-h)+32px)]" data-reveal="fade">
                  <h3 id={`course-${course.code}`} className="display text-[clamp(4rem,9vw,7.5rem)] leading-[0.8] tracking-[-0.03em]">
                    {course.code}
                  </h3>
                  <p className="mono mt-5">{course.name}</p>
                  <p className="dim mt-3 max-w-[30ch] text-[0.98rem]">{course.intro}</p>
                  <p className="mono faint mt-5">
                    {course.projects.length} {course.projects.length === 1 ? 'project' : 'projects'}
                  </p>
                </div>
              </header>

              <ul className="col-span-12 flex flex-col lg:col-span-9">
                {course.projects.map((p) => (
                  <AcademicItem key={p.slug} project={p} />
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AcademicItem({ project }: { project: Project }) {
  return (
    <li id={project.slug} className="hairline scroll-mt-[calc(var(--nav-h)+24px)] border-t py-10 first:pt-8" data-reveal="fade">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <span className="mono accent-gold">{project.index}</span>
        <span className="flex items-center gap-5">
          {project.authorship ? <span className="mono faint">{project.authorship}</span> : null}
          <Status status={project.status} />
        </span>
      </div>
      <h4 className="display h3 mt-4">{project.title}</h4>
      {project.subtitle ? <p className="display mt-2 text-[1.3rem] italic opacity-80">{project.subtitle}</p> : null}
      <p className="dim mt-4 measure">{project.summary}</p>

      <div className={`mt-8 grid gap-10 ${project.cover ? 'md:grid-cols-[1fr_240px]' : ''}`}>
        <DidLearnt project={project} />
        {project.cover ? (
          <figure className="max-w-[240px]">
            <div className="overflow-hidden rounded-sm ring-1 ring-[var(--line)]">
              <Img image={project.cover} sizes="240px" />
            </div>
            {project.cover.caption ? <figcaption className="mono faint mt-3">{project.cover.caption}</figcaption> : null}
          </figure>
        ) : null}
      </div>
      <Todo items={project.todo} className="mt-6" />
    </li>
  );
}
