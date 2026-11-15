import type { Project } from '@/content/types';
import { ProjectLinks } from '@/components/case-study/ProjectLinks';

/** "What I did" and "What I learnt", side by side, then the project's links and any honesty note. */
export function DidLearnt({ project, columns = 2 }: { project: Project; columns?: 1 | 2 }) {
  const lists = [
    { label: project.authorship === 'Group project' ? 'What we did' : 'What I did', items: project.did },
    { label: 'What I learnt', items: project.learnt },
  ].filter((l) => l.items.length);

  return (
    <div className="flex flex-col gap-8">
      <div className={`grid gap-8 ${columns === 2 ? 'md:grid-cols-2 md:gap-10' : ''}`}>
        {lists.map((l) => (
          <div key={l.label}>
            <p className="mono accent-gold mb-3">{l.label}</p>
            <ul className="hairline border-t">
              {l.items.map((item) => (
                <li key={item} className="hairline flex gap-3 border-b py-3 text-[0.98rem] leading-relaxed">
                  <span aria-hidden="true" className="mt-[0.75em] block h-px w-3 flex-none bg-[var(--accent)]" />
                  <span className="dim">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {project.note ? <p className="border-l border-[var(--accent)] pl-4 text-[0.95rem] italic opacity-85">{project.note}</p> : null}
      <ProjectLinks links={project.links} />
    </div>
  );
}
