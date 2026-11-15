export function Arrow({ className = '', direction = 'right' }: { className?: string; direction?: 'right' | 'up-right' | 'up' | 'left' }) {
  const rotate = { right: 0, 'up-right': -45, up: -90, left: 180 }[direction];
  return (
    <svg className={`arrow ${className}`} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <g transform={`rotate(${rotate} 7 7)`}>
        <path d="M0.5 7h12.5M9 3l4 4-4 4" stroke="currentColor" strokeWidth="1.1" />
      </g>
    </svg>
  );
}
