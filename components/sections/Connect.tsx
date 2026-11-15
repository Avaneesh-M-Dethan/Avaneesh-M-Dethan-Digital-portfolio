import { contact } from '@/content/social';
import { Lines } from '@/components/ui/Lines';
import { Arrow } from '@/components/ui/Arrow';
import { Img } from '@/components/ui/Img';
import { CopyEmail } from './CopyEmail';

export function Connect() {
  const links = contact.links.filter((l) => l.href);
  return (
    <section id="connect" data-chapter="connect" aria-labelledby="connect-title" className="tone-ink grain relative overflow-hidden">
      <div className="chapter shell relative">
        <div className="flex items-center gap-4">
          <span className="mono accent-gold">08</span>
          <span className="hairline h-px flex-1 border-t" data-reveal="draw" />
          <span className="mono faint">Let&apos;s connect</span>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 flex flex-col lg:col-span-7">
            <h2 id="connect-title" className="display text-[clamp(3rem,7.4vw,7.5rem)] leading-[0.92]">
              <Lines lines={[contact.heading.lead, <em key="a" className="accent-gold">{contact.heading.accent}</em>]} />
            </h2>
            <p className="lead dim measure mt-8" data-reveal="fade">
              {contact.body}
            </p>

            <div className="mt-auto pt-[clamp(40px,6vw,80px)]">
              <div className="flex flex-col gap-6 border-t border-[var(--line)] pt-10" data-reveal="fade">
                <div className="min-w-0">
                  <p className="mono faint">Write to me</p>
                  <a href={`mailto:${contact.email}`} className="display link-line mt-3 inline-block break-all text-[clamp(1.6rem,3.6vw,3.2rem)] leading-tight hover:text-gold">
                    {contact.email}
                  </a>
                </div>
                <CopyEmail email={contact.email} />
              </div>

              <ul className="mt-10 flex flex-wrap gap-3" data-reveal="fade">
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="btn-line">
                      {l.label} <Arrow direction="up-right" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The neon sign in the photo literally says "Let's talk": the closing image of the story. */}
          <figure className="col-span-12 sm:col-span-8 sm:col-start-3 lg:col-span-5 lg:col-start-8">
            <Img image={contact.photo} sizes="(min-width: 1024px) 36vw, (min-width: 640px) 66vw, 100vw" />
          </figure>
        </div>
      </div>
    </section>
  );
}
