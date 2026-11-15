/** The visual distinction for the two Best Delegate awards: a pair of gold seals. */
export function AwardMark({ title, count, compact = false }: { title: string; count: number; compact?: boolean }) {
  return (
    <div className="inline-flex items-center gap-5 rounded-full border border-gold/40 py-2 pl-2 pr-6">
      <span className="flex -space-x-3" aria-hidden="true">
        {Array.from({ length: count }).map((_, i) => (
          <svg key={i} width={compact ? 36 : 44} height={compact ? 36 : 44} viewBox="0 0 44 44" className="rounded-full bg-charcoal">
            <circle cx="22" cy="22" r="20.5" fill="none" stroke="#b9a16a" strokeWidth="1" />
            <circle cx="22" cy="22" r="16" fill="none" stroke="#b9a16a" strokeWidth="0.6" strokeDasharray="1.5 2.2" />
            <path d="M22 12.5l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L22 26.3l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z" fill="#b9a16a" />
          </svg>
        ))}
      </span>
      <span className="flex flex-col">
        <span className="display text-[1.35rem] italic leading-none text-gold">{title}</span>
        <span className="mono faint mt-1.5">
          Awarded {count === 2 ? 'twice' : `${count} times`}
        </span>
      </span>
    </div>
  );
}
