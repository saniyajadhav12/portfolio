import { experience } from "@/data/content";
import { ChevronIcon } from "../icons";
import { Reveal } from "../Reveal";
import { RichText } from "../RichText";
import { Section } from "../Section";
import { SmoothDetails } from "../SmoothDetails";

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
                    {/* Company · location; the "·" hides if the location wraps
                        to its own line (same technique as the hero badge) */}
                    <p className="badge-parts font-medium text-accent">
                      <span>
                        <span>{job.company}</span>
                        {job.location && (
                          <span className="text-muted">
                            {/* Visible "·" is decorative; screen readers get a comma */}
                            <span className="sr-only">{",\u00a0"}</span>
                            {job.location}
                          </span>
                        )}
                      </span>
                    </p>
                  </div>
                  <p className="text-sm font-medium text-muted sm:shrink-0">
                    {job.dates}
                  </p>
                </header>
                <p className="mt-3 leading-relaxed text-ink sm:mt-4">{job.summary}</p>

                {/* Full bullets behind a toggle (collapsed by default) */}
                <SmoothDetails
                  className="mt-3"
                  summaryClassName="-ml-1 inline-flex min-h-11 cursor-pointer list-none items-center gap-1.5 rounded-xl px-1 font-semibold text-accent hover:underline hover:underline-offset-4"
                  summary={
                    <>
                      <span className="when-closed">Show details</span>
                      <span className="when-open">Hide details</span>
                      <span className="sr-only">
                        {" "}
                        for {job.role} at {job.company}
                      </span>
                      <ChevronIcon className="chevron" />
                    </>
                  }
                >
                  <ul className="mt-2 list-disc space-y-2.5 pl-4 leading-relaxed text-muted marker:text-accent sm:pl-5">
                    {job.bullets.map((b) => (
                      <li key={b}>
                        <RichText text={b} />
                      </li>
                    ))}
                  </ul>
                </SmoothDetails>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
