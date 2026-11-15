import 'server-only';
import { existsSync } from 'node:fs';
import path from 'node:path';
import type { LinkItem } from '@/content/types';

/** Drops links to /public files that have not been added yet, and links with no URL. */
export function resolveLinks(links: LinkItem[]): LinkItem[] {
  return links.filter((l) => {
    if (!l.href) return false;
    if (!l.requiresFile) return true;
    return existsSync(path.join(process.cwd(), 'public', l.href));
  });
}

export const isExternal = (href: string) => /^https?:\/\//.test(href);
