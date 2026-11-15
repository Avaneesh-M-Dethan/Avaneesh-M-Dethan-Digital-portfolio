import { contact } from '@/content/social';
import { profile } from '@/content/profile';
import { BackToTop } from './BackToTop';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="tone-ink border-t border-[var(--line)]">
      <div className="shell flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="mono faint">
          © {year} {profile.name} · {contact.footer}
        </p>
        <BackToTop />
      </div>
    </footer>
  );
}
