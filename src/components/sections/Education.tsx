import { education } from "@/data/content";
import { Reveal } from "../Reveal";
import { Section } from "../Section";

export function Education() {
  return (
    <Section id="education" title="Education" eyebrow="Where I've studied">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((ed) => (
          <Reveal key={ed.school}>
            <article className="h-full card-hover rounded-3xl border border-line bg-surface p-5 shadow-sm sm:p-8">
              <h3 className="font-serif text-xl font-semibold">{ed.school}</h3>
              {ed.location && (
                <p className="text-sm text-muted">{ed.location}</p>
              )}
              <p className="mt-3 font-medium text-accent">{ed.degree}</p>
              <p className="mt-1 text-sm font-medium text-muted">{ed.dates}</p>
              {ed.gpa && (
                <p className="mt-3">
                  <span className="font-semibold">GPA:</span> {ed.gpa}
                </p>
              )}
              {ed.courses.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold">Courses</h4>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {ed.courses.map((c) => (
                      <li
                        key={c}
                        className="rounded-xl bg-tag-bg px-3 py-1 text-sm text-tag-ink"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
