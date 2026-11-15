import { Lines } from './Lines';

type Props = {
  number: string;
  label: string;
  heading: { lead: string; accent: string };
  body?: string;
  id?: string;
};

/** Chapter opener: mono eyebrow, hairline, two-line serif heading with an italic accent. */
export function SectionHeader({ number, label, heading, body, id }: Props) {
  return (
    <header className="grid grid-cols-12 gap-x-6 gap-y-8">
      <div className="col-span-12 flex items-center gap-4">
        <span className="mono accent-gold">{number}</span>
        <span className="hairline h-px flex-1 border-t" data-reveal="draw" />
        <span className="mono faint">{label}</span>
      </div>
      <h2 id={id} className="display h1 col-span-12 lg:col-span-9">
        <Lines lines={[heading.lead, <em key="a" className="accent-gold">{heading.accent}</em>]} />
      </h2>
      {body ? (
        <p className="lead dim measure col-span-12 md:col-span-8 lg:col-span-6 lg:col-start-7" data-reveal="fade">
          {body}
        </p>
      ) : null}
    </header>
  );
}
