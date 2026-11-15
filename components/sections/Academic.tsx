import Link from 'next/link';
import { academicIntro, courses } from '@/content/academic';
import type { Project } from '@/content/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Status } from '@/components/ui/Status';
import { Arrow } from '@/components/ui/Arrow';
import { Img } from '@/components/ui/Img';
import { Todo } from '@/components/ui/Todo';

/** Course folios on a paper-toned page: each course has its own column and list. */
export function Academic() {
  return (
    <section id="academic" data-chapter="academic" aria-labelledby="academic-title" className="tone-bone on-light">
      <div className="chapter shell">
        <SectionHeader id="academic-title" number="05" label="Academic projects & research" heading={academicIntro.heading} body={academicIntro.body} />

        <div className="mt-[clamp(64px,9vw,128px)] flex flex-col gap-[clamp(72px,9vw,128px)]">
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

              <ul className="col-span-12 flex flex-col gap-10 lg:col-span-9">
                {orderFeaturedFirst(course.projects).map((p) =>
                  p.tier === 'featured' ? <FolioCard key={p.slug} project={p} /> : <FolioRow key={p.slug} project={p} />,
                )}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Keep the given order, but group featured case studies above the plain rows within a course.
const orderFeaturedFirst = (ps: Project[]) => [...ps.filter((p) => p.tier === 'featured'), ...ps.filter((p) => p.tier !== 'featured')];

function FolioCard({ project }: { project: Project }) {
  const href = `/academic/${project.slug}/`;
  return (
    <li className="tone-ink group relative grid grid-cols-1 overflow-hidden rounded-sm md:grid-cols-12" data-reveal="fade">
      <div className="relative md:col-span-6">
        {project.cover ? (
          <div className="h-full max-h-[420px] overflow-hidden md:max-h-none md:absolute md:inset-0">
            <div className="h-full transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]">
              <Img image={project.cover} sizes="(min-width: 768px) 36vw, 100vw" reveal={false} fill className="h-full min-h-[320px]" imgClassName="object-top" />
            </div>
          </div>
        ) : project.coverType ? (
          <div className="flex h-full min-h-[240px] flex-col justify-end bg-charcoal p-7 md:min-h-[360px]">
            <p className="display text-[clamp(2.2rem,4.2vw,3.6rem)] italic leading-[0.95] text-gold transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:translate-x-2">
              {project.coverType.display}
            </p>
            <p className="mono faint mt-6">{project.coverType.caption}</p>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col p-7 md:col-span-6 md:p-9">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="mono accent-gold">{project.index}</span>
          <Status status={project.status} />
        </div>
        <h4 className="display h3 mt-6">
          <Link href={href} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
            {project.title}
          </Link>
        </h4>
        {project.subtitle ? <p className="display mt-2 text-[1.25rem] italic opacity-80">{project.subtitle}</p> : null}
        <p className="dim mt-5 text-[0.98rem]">{project.summary}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
          <span className="mono faint">{project.authorship ?? ''}</span>
          <span className="mono inline-flex items-center gap-3 border-b border-current pb-1.5 transition-colors duration-500 group-hover:text-gold group-focus-within:text-gold">
            Read the case study <Arrow />
          </span>
        </div>
      </div>
    </li>
  );
}

function FolioRow({ project }: { project: Project }) {
  const hasPage = project.sections.length > 0;
  return (
    <li className="group hairline relative grid grid-cols-1 gap-x-6 gap-y-3 border-t pt-6 md:grid-cols-9" data-reveal="fade">
      <span className="mono accent-gold pt-1.5 md:col-span-2">{project.index}</span>
      <div className="md:col-span-5">
        <h4 className="display h4 transition-colors duration-500 group-hover:text-gold-deep">
          {hasPage ? (
            <Link href={"/academic/" + project.slug + "/"} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h4>
        <p className="dim mt-2 text-[0.98rem]">{project.summary}</p>
        {project.authorship ? <p className="mono faint mt-3">{project.authorship}</p> : null}
        <Todo items={project.todo} className="relative mt-4" />
      </div>
      <div className="flex items-start justify-between gap-4 md:col-span-2 md:flex-col md:items-end">
        <Status status={project.status} />
        {hasPage ? (
          <span className="mono inline-flex items-center gap-2.5 border-b border-current pb-1 transition-colors duration-500 group-hover:text-gold-deep group-focus-within:text-gold-deep">
            Case study <Arrow />
          </span>
        ) : null}
      </div>
    </li>
  );
}
