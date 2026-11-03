"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

/**
 * A native <details> whose content slides/fades in on open (pure CSS) and
 * plays a short slide-out before closing. Keyboard, screen readers and
 * find-in-page keep the native behavior; reduced-motion closes instantly.
 */
export function SmoothDetails({
  summary,
  children,
  className = "",
  summaryClassName = "",
}: {
  summary: ReactNode;
  children: ReactNode;
  className?: string;
  summaryClassName?: string;
}) {
  const ref = useRef<HTMLDetailsElement>(null);

  function onSummaryClick(e: MouseEvent<HTMLElement>) {
    const details = ref.current;
    if (!details || !details.open) return; // opening: let the browser do it
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    e.preventDefault();
    if (details.classList.contains("is-closing")) return;
    const body = details.querySelector<HTMLElement>(".details-body");
    details.classList.add("is-closing");
    const finish = () => {
      details.classList.remove("is-closing");
      details.open = false;
    };
    if (body) body.addEventListener("animationend", finish, { once: true });
    else finish();
  }

  return (
    <details ref={ref} className={className}>
      <summary className={summaryClassName} onClick={onSummaryClick}>
        {summary}
      </summary>
      <div className="details-body">{children}</div>
    </details>
  );
}
