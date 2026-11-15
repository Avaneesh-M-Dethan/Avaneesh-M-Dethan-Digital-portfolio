import { builtIntro, visibleProjects } from '@/content/projects';
import type { Project } from '@/content/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FeaturedCard } from './FeaturedCard';
import { IndexRow } from './IndexRow';
import { ProjectDetails } from './ProjectDetails';
import { getImage } from '@/lib/images';

// A small (~640px) variant of a manifest image for hover previews.
function previewFor(p: Project) {
  const e = p.cover ? getImage(p.cover.key) : null;
  if (!e) return undefined;
  const small = e.srcSet.split(', ')[0].split(' ')[0];
  return { src: small, width: e.width, height: e.height };
}

export function Built() {
  // Featured work opens and closes the chapter; the typographic index sits between.
  const featured = visibleProjects.filter((p) => p.tier === 'featured');
  const index = visibleProjects.filter((p) => p.tier === 'index');
  const [first, ...rest] = featured;

  return (
    <section id="built" data-chapter="built" aria-labelledby="built-title" className="tone-ink">
      <div className="chapter shell">
        <SectionHeader id="built-title" number="05" label="Entrepreneurship & things I've built" heading={builtIntro.heading} body={builtIntro.body} />

        <div className="mt-[clamp(64px,9vw,128px)] flex flex-col gap-[clamp(80px,10vw,140px)]">
          {first ? <FeaturedCard project={first} /> : null}

          {index.length ? (
            <div>
              <div className="flex items-center gap-4 pb-6">
                <span className="mono faint">Also built</span>
                <span className="hairline h-px flex-1 border-t" data-reveal="draw" />
              </div>
              <ul className="hairline border-t">
                {index.map((p: Project) => (
                  <IndexRow key={p.slug} index={p.index} title={p.title} category={p.category} summary={p.summary} status={p.status} preview={previewFor(p)}>
                    {p.did.length ? <ProjectDetails project={p} /> : undefined}
                  </IndexRow>
                ))}
              </ul>
            </div>
          ) : null}

          {rest.map((p, i) => (
            <FeaturedCard key={p.slug} project={p} flip={i % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
