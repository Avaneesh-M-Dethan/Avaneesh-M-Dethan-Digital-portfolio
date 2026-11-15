import type { ElementType, ReactNode } from 'react';

/** Splits a heading into masked lines that rise into view. */
export function Lines({
  lines,
  as: Tag = 'span',
  className = '',
  reveal = true,
}: {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  reveal?: boolean;
}) {
  return (
    <Tag className={className} data-reveal={reveal ? 'lines' : undefined}>
      {lines.map((line, i) => (
        <span className="mask" key={i}>
          <span className="mask-inner">{line}</span>
        </span>
      ))}
    </Tag>
  );
}
