import { showTodos } from '@/lib/site';

/** Shows what still needs Avaneesh's input. Visible in `npm run dev` only, never in the public build. */
export function Todo({ items, className = '' }: { items?: string[] | string; className?: string }) {
  if (!showTodos || !items || (Array.isArray(items) && items.length === 0)) return null;
  const list = Array.isArray(items) ? items : [items];
  return (
    <ul className={`flex flex-col items-start gap-2 ${className}`} aria-hidden="true">
      {list.map((t) => (
        <li key={t} className="todo-marker">
          <span>TO ADD</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
