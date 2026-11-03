import type { ReactNode } from "react";

/** Simple browser-window frame for screenshots: a thin top bar with three
 *  dots, rounded corners and a soft border/shadow. Decorative only. */
export function BrowserFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_14px_32px_-20px_var(--shadow)] ${className}`}
    >
      <div
        aria-hidden="true"
        className="flex h-7 items-center gap-1.5 border-b border-line bg-bg px-3"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-accent/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted/35" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted/35" />
      </div>
      {children}
    </div>
  );
}
