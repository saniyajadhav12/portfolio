import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="py-8.5 sm:py-13">
      <Reveal>
        <div className="mb-8 sm:mb-10">
          {eyebrow && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {eyebrow}
            </p>
          )}
          <h2
            id={headingId}
            className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          <svg
            aria-hidden="true"
            width="96"
            height="12"
            viewBox="0 0 96 12"
            fill="none"
            className="squiggle mt-3 text-accent"
          >
            <path
              d="M2 7c8-6 14 4 22 0s14-6 22 0 14 4 22 0 14-5 26 0"
              pathLength={1}
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </Reveal>
      {children}
    </section>
  );
}
