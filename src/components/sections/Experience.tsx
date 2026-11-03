import { experience } from "@/data/content";
import { Reveal } from "../Reveal";
import { RichText } from "../RichText";
import { Section } from "../Section";

export function Experience() {
  const jobs = experience.filter((job) => job.show);
  return (
    <Section id="experience" title="Experience" eyebrow="Where I've worked">
      <ol className="timeline relative ml-1.5 pl-0.5 sm:ml-2">
        {jobs.map((job) => (
          <li key={`${job.company}-${job.role}`} className="timeline-item relative mb-8 pl-5 last:mb-0 sm:mb-10 sm:pl-10">
            <span
              aria-hidden="true"
              className="timeline-dot absolute -left-[9px] top-7 h-4 w-4 rounded-full border-4 border-bg bg-accent sm:top-9"
            />
            <Reveal>
              <article className="card-hover rounded-3xl border border-line bg-surface p-5 shadow-sm sm:p-8">
                <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold sm:text-2xl">
                      {job.role}
                    </h3>
                    <p className="font-medium text-accent">
                      {job.company}
                      {job.location && (
                        <span className="text-muted"> · {job.location}</span>
                      )}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-muted sm:shrink-0">
                    {job.dates}
                  </p>
                </header>
                <ul className="mt-4 list-disc space-y-2.5 pl-4 sm:mt-5 sm:pl-5 leading-relaxed text-muted marker:text-accent">
                  {job.bullets.map((b) => (
                    <li key={b}>
                      <RichText text={b} />
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
