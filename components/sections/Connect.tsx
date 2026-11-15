import { contact } from '@/content/social';
import { Lines } from '@/components/ui/Lines';
import { Arrow } from '@/components/ui/Arrow';
import { Todo } from '@/components/ui/Todo';
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

        <h2 id="connect-title" className="display mt-10 text-[clamp(3rem,9vw,9rem)] leading-[0.92]">
          <Lines lines={[contact.heading.lead, <em key="a" className="accent-gold">{contact.heading.accent}</em>]} />
        </h2>
        <p className="lead dim measure mt-8" data-reveal="fade">
          {contact.body}
        </p>

        <div className="mt-[clamp(48px,7vw,96px)] flex flex-col gap-6 border-t border-[var(--line)] pt-10 md:flex-row md:items-end md:justify-between" data-reveal="fade">
          <div className="min-w-0">
            <p className="mono faint">Write to me</p>
            <a href={`mailto:${contact.email}`} className="display link-line mt-3 inline-block break-all text-[clamp(1.6rem,4.4vw,3.6rem)] leading-tight hover:text-gold">
              {contact.email}
            </a>
          </div>
          <CopyEmail email={contact.email} />
        </div>

        <ul className="mt-12 flex flex-wrap gap-3" data-reveal="fade">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="btn-line">
                {l.label} <Arrow direction="up-right" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
        <Todo items={contact.todo} className="mt-8" />
      </div>
    </section>
  );
}
