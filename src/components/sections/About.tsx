import { about } from "@/data/content";
import { CountUp } from "../CountUp";
import { Reveal } from "../Reveal";
import { Section } from "../Section";

export function About() {
  return (
    <Section id="about" title="About me" eyebrow="Who I am">
      <Reveal>
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
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
    </Section>
  );
}
