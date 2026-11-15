import type { Project } from '@/content/types';
import { BlockContent } from '@/components/case-study/BlockContent';
import { ProjectLinks } from '@/components/case-study/ProjectLinks';
import { Todo } from '@/components/ui/Todo';

/** The expanded body of an index row: role, sections, tools, links and an honesty note. */
export function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
      <div className="flex flex-col gap-10 lg:col-span-7">
        {project.sections.map((b) => (
          <div key={b.heading}>
            <h4 className="mono accent-gold mb-4">{b.heading}</h4>
            <BlockContent block={b} compact />
          </div>
        ))}
      </div>
      <aside className="flex flex-col gap-8 lg:col-span-4 lg:col-start-9">
        {project.role ? (
          <div>
            <p className="mono faint">Role</p>
            <p className="mt-2">{project.role}</p>
          </div>
        ) : null}
        {project.tools?.length ? (
          <div>
            <p className="mono faint">Tools</p>
            <p className="dim mt-2">{project.tools.join(' · ')}</p>
          </div>
        ) : null}
        {project.note ? <p className="border-l border-gold pl-4 text-[0.95rem] italic opacity-85">{project.note}</p> : null}
        <ProjectLinks links={project.links} />
        <Todo items={project.todo} />
      </aside>
    </div>
  );
}
