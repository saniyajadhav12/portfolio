import { projects, type Project } from "@/data/content";
import { ChevronIcon, ExternalIcon, GitHubIcon } from "../icons";
import { Reveal } from "../Reveal";
import { RichText } from "../RichText";
import { Section } from "../Section";
import { SmoothDetails } from "../SmoothDetails";

function HighlightList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-accent">
      {items.map((item) => (
        <li key={item}>
          <RichText text={item} />
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isSolo = project.type === "Solo";
  return (
    <article className="card-hover rounded-3xl border border-line bg-surface p-5 shadow-sm sm:p-8">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-serif text-2xl font-semibold sm:text-3xl">
              {project.title}
            </h3>
            <span
              className={
                isSolo
                  ? "rounded-full bg-accent px-3 py-1 text-sm font-semibold text-on-accent"
                  : "rounded-full border border-accent px-3 py-1 text-sm font-semibold text-accent"
              }
            >
              {project.type}
            </span>
          </div>
          <p className="mt-1 text-sm font-medium text-muted">{project.dates}</p>
        </div>
        <div className="flex flex-wrap gap-2 whitespace-nowrap sm:shrink-0">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-line px-5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent sm:flex-none"
          >
            <GitHubIcon />
            GitHub
            <span className="sr-only">repository for {project.title} (opens in a new tab)</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-accent px-5 text-sm font-semibold text-on-accent transition-transform hover:-translate-y-0.5 sm:flex-none"
            >
              Live Demo
              <ExternalIcon />
              <span className="sr-only">of {project.title} (opens in a new tab)</span>
            </a>
          )}
        </div>
      </header>

      <p className="mt-4 text-lg leading-relaxed">{project.summary}</p>

      <ul aria-label={`${project.title} tech stack`} className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-xl bg-tag-bg px-3 py-1 text-sm font-medium text-tag-ink"
          >
            {t}
          </li>
        ))}
      </ul>

      <SmoothDetails
        className="mt-6 rounded-2xl border border-line"
        summaryClassName="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 rounded-2xl px-5 font-semibold hover:text-accent"
        summary={
          <>
            Highlights
            <ChevronIcon className="chevron" />
          </>
        }
      >
        <div className="space-y-5 px-5 pb-5 pt-1">
          {project.teamWork ? (
            <>
              <div>
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-ink">
                  My team-phase work
                </h4>
                <HighlightList items={project.teamWork} />
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-ink">
                  Solo highlights (after the course)
                </h4>
                <HighlightList items={project.highlights} />
              </div>
            </>
          ) : (
            <HighlightList items={project.highlights} />
          )}
        </div>
      </SmoothDetails>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects" eyebrow="What I've built">
      <div className="space-y-8">
        {projects.map((project) => (
          <Reveal key={project.title}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
