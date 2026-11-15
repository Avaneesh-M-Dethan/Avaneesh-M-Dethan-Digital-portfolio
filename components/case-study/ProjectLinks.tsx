import type { LinkItem } from '@/content/types';
import { resolveLinks, isExternal } from '@/lib/links';
import { Arrow } from '@/components/ui/Arrow';

/** Outbound project links. Links to files that are not in /public yet are left out, so nothing is ever dead. */
export function ProjectLinks({ links, className = '' }: { links: LinkItem[]; className?: string }) {
  const live = resolveLinks(links);
  if (!live.length) return null;
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {live.map((l) => {
        const external = isExternal(l.href);
        return (
          <li key={l.href}>
            <a
              href={l.href}
              className="btn-line"
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {l.label}
              <Arrow direction={external ? 'up-right' : 'right'} />
              {external ? <span className="sr-only">(opens in a new tab)</span> : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
