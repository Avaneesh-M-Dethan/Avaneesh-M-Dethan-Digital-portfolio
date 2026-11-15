import type { Status as S } from '@/content/types';

export function Status({ status, className = '' }: { status: S; className?: string }) {
  return <span className={`status status-${status.tone} mono ${className}`}>{status.label}</span>;
}
