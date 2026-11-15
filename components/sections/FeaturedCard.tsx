import type { Project } from '@/content/types';
import { Img } from '@/components/ui/Img';
import { Status } from '@/components/ui/Status';
import { DidLearnt } from '@/components/ui/DidLearnt';

type Props = { project: Project; flip?: boolean };

/** Large featured project: image and headline side by side, then what I did and learnt, and the link. */
export function FeaturedCard({ project, flip = false }: Props) {
  return (
    <article id={project.slug} className="group grid scroll-mt-[calc(var(--nav-h)+24px)] grid-cols-12 gap-x-6 gap-y-8">
      <div className={`col-span-12 lg:col-span-8 ${flip ? 'lg:order-2 lg:col-start-5' : ''}`}>
        {project.cover ? (
          <div className="relative overflow-hidden">
            <div className="transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:scale-[1.02]">
              <Img image={project.cover} sizes="(min-width: 1024px) 62vw, 100vw" imgClassName="object-top" />
            </div>
            <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
          </div>
        ) : null}
      </div>

      <div className={`col-span-12 flex flex-col lg:col-span-4 ${flip ? 'lg:order-1 lg:pr-6' : 'lg:pl-6'}`}>
        <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-4">
          <span className="mono accent-gold">{project.index}</span>
          <Status status={project.status} />
        </div>
        <p className="mono faint mt-6">{project.category}</p>
        <h3 className="display h2 mt-3">{project.title}</h3>
        {project.subtitle ? <p className="display mt-2 text-[1.35rem] italic leading-snug opacity-80">{project.subtitle}</p> : null}
        <p className="dim mt-5 measure">{project.summary}</p>
        {project.tools?.length ? <p className="mono faint mt-6 leading-relaxed">{project.tools.join(' · ')}</p> : null}
      </div>

      <div className="col-span-12" data-reveal="fade">
        <DidLearnt project={project} />
      </div>
    </article>
  );
}
