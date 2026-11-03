import { about, now } from "@/data/content";
import { CountUp } from "../CountUp";
import { Reveal } from "../Reveal";
import { Section } from "../Section";

/** Small "Now" card. Renders nothing until building or learning is filled in. */
export function NowCard({
  building,
  learning,
  updated,
}: {
  building: string;
  learning: string;
  updated: string;
}) {
  if (!building && !learning) return null;
  const rows = [
    { label: "Building", text: building },
    { label: "Learning", text: learning },
  ].filter((row) => row.text);

  return (
    <section
      aria-labelledby="now-heading"
      className="max-w-2xl rounded-3xl border border-line bg-surface p-5 shadow-sm sm:p-6"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 id="now-heading" className="font-serif text-xl font-semibold">
          Now
        </h3>
        {updated && (
          <p className="text-sm text-muted">Updated {updated}</p>
        )}
      </div>
      <dl className="mt-3 space-y-2 leading-relaxed">
        {rows.map((row) => (
          <div key={row.label} className="sm:flex sm:gap-3">
            <dt className="font-semibold text-accent sm:w-24 sm:shrink-0">
              {row.label}
            </dt>
            <dd className="text-ink">{row.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" title="About me" eyebrow="Who I am">
      <Reveal>
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {about.closing && <p>{about.closing}</p>}
        </div>
      </Reveal>

      <Reveal className="mt-12">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
          My through-line: performance &amp; accessibility
        </h3>
        <ul className="grid gap-4 sm:grid-cols-3">
          {about.highlights.map((h) => (
            <li
              key={h.stat}
              className="rounded-3xl border border-line bg-surface p-5 shadow-sm sm:p-6"
            >
              <p className="font-serif text-2xl font-semibold text-accent">
                <CountUp value={h.stat} />
              </p>
              <p className="mt-2 leading-snug">{h.label}</p>
              <p className="mt-3 text-sm font-medium text-muted">{h.source}</p>
            </li>
          ))}
        </ul>
      </Reveal>

      {(now.building || now.learning) && (
        <Reveal className="mt-8">
          <NowCard {...now} />
        </Reveal>
      )}
    </Section>
  );
}
