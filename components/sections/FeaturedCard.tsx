import Link from 'next/link';
import type { Project } from '@/content/types';
import { Img } from '@/components/ui/Img';
import { Status } from '@/components/ui/Status';
import { Arrow } from '@/components/ui/Arrow';

type Props = { project: Project; href: string; flip?: boolean; tone?: 'dark' | 'light' };

/** Large featured project card: image (or typographic cover) and meta, linking to its case study. */
export function FeaturedCard({ project, href, flip = false, tone = 'dark' }: Props) {
  return (
    <article className="group relative grid grid-cols-12 gap-x-6 gap-y-7">
      <div className={`col-span-12 lg:col-span-8 ${flip ? 'lg:order-2 lg:col-start-5' : ''}`}>
        <Cover project={project} tone={tone} />
      </div>

      <div className={`col-span-12 flex flex-col lg:col-span-4 ${flip ? 'lg:order-1 lg:pr-6' : 'lg:pl-6'}`}>
        <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-4">
          <span className="mono accent-gold">{project.index}</span>
          <Status status={project.status} />
        </div>
        <p className="mono faint mt-6">{project.category}</p>
        <h3 className="display h2 mt-3">
          <Link href={href} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
            {project.title}
          </Link>
        </h3>
        {project.subtitle ? <p className="display mt-2 text-[1.35rem] italic leading-snug opacity-80">{project.subtitle}</p> : null}
        <p className="dim mt-5 measure">{project.summary}</p>
        <span className="mono mt-8 inline-flex items-center gap-3 self-start border-b border-current pb-1.5 transition-colors duration-500 group-hover:text-gold group-focus-within:text-gold">
          Read the case study <Arrow />
        </span>
      </div>
    </article>
  );
}

function Cover({ project, tone }: { project: Project; tone: 'dark' | 'light' }) {
  if (project.cover) {
    return (
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:scale-[1.025]">
          <Img image={project.cover} sizes="(min-width: 1024px) 62vw, 100vw" className={tallCrop(project) ? 'max-h-[min(78vh,760px)]' : ''} imgClassName="object-top" />
        </div>
        <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
      </div>
    );
  }
  if (project.coverType) {
    return (
      <div className={`relative flex aspect-[16/10] flex-col justify-between overflow-hidden p-[clamp(20px,4vw,48px)] ${tone === 'light' ? 'bg-ink text-bone' : 'bg-charcoal'}`} data-reveal="fade">
        <span className="mono faint">{project.category}</span>
        <p className="display text-[clamp(2.4rem,6vw,5.5rem)] italic leading-[0.95] text-gold transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:translate-x-2">
          {project.coverType.display}
        </p>
        <p className="mono faint max-w-[40ch]">{project.coverType.caption}</p>
      </div>
    );
  }
  return null;
}

const tallCrop = (p: Project) => p.cover?.key.includes('angadi');
