import type { Project } from '@/content/types';
import { Img } from '@/components/ui/Img';
import { DidLearnt } from '@/components/ui/DidLearnt';
import { Todo } from '@/components/ui/Todo';
import { getImage } from '@/lib/images';

/** The expanded body of an index row: screenshot, what I did and learnt, tools and links. */
export function ProjectDetails({ project }: { project: Project }) {
  const shot = project.cover ? getImage(project.cover.key) : null;
  const wide = shot ? shot.width >= shot.height : false;
  const figure =
    project.cover && shot ? (
      <figure className={wide ? '' : 'max-w-[300px]'}>
        <div className="overflow-hidden rounded-sm ring-1 ring-[var(--line)]">
          <Img image={project.cover} reveal={false} sizes={wide ? '(min-width: 1024px) 70vw, 100vw' : '300px'} />
        </div>
        {project.cover.caption ? <figcaption className="mono faint mt-3">{project.cover.caption}</figcaption> : null}
      </figure>
    ) : null;

  return (
    <div className="flex flex-col gap-10">
      {wide ? figure : null}
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-8">
          <DidLearnt project={project} />
        </div>
        <aside className="flex flex-col gap-8 lg:col-span-3 lg:col-start-10">
          {!wide ? figure : null}
          {project.tools?.length ? (
            <div>
              <p className="mono faint">Tools</p>
              <p className="dim mt-2">{project.tools.join(' · ')}</p>
            </div>
          ) : null}
          <Todo items={project.todo} />
        </aside>
      </div>
    </div>
  );
}
