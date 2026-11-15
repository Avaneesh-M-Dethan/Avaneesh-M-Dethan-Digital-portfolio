import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="tone-ink grain relative flex min-h-[100svh] items-center">
      <div className="shell">
        <p className="mono accent-gold">404</p>
        <h1 className="display h1 mt-6">
          This page is <em className="accent-gold">not written yet.</em>
        </h1>
        <Link href="/" className="btn-line mt-10">
          Back to the story
        </Link>
      </div>
    </section>
  );
}
