import type { Metadata } from "next";
import Link from "next/link";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { ExternalIcon, GitHubIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { RichText } from "@/components/RichText";
import { Section } from "@/components/Section";
import { SiteShell } from "@/components/SiteShell";
import { plotline } from "@/data/case-studies/plotline";
import { projects } from "@/data/content";

const project = projects.find((p) => p.title === "Plotline")!;

export const metadata: Metadata = {
  title: plotline.metaTitle,
  description: plotline.metaDescription,
  openGraph: {
    title: plotline.metaTitle,
    description: plotline.metaDescription,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: plotline.metaTitle,
    description: plotline.metaDescription,
  },
};

function BackLink() {
  return (
    <Link
      href="/#projects"
      className="-ml-1 inline-flex min-h-11 items-center gap-1.5 rounded-xl px-1 font-semibold text-accent hover:underline hover:underline-offset-4"
    >
      <span aria-hidden="true">←</span> Back to projects
    </Link>
  );
}

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="max-w-3xl space-y-4 text-lg leading-relaxed">
      {paragraphs.map((p) => (
        <p key={p}>
          <RichText text={p} />
        </p>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="max-w-3xl list-disc space-y-3 pl-5 text-lg leading-relaxed marker:text-accent">
      {items.map((item) => (
        <li key={item}>
          <RichText text={item} />
        </li>
      ))}
    </ul>
  );
}

export default function PlotlineCaseStudy() {
  const { overview, architecture, performance, recommender, testing } = plotline;
  return (
    <SiteShell navBase="/">
      <article>
        {/* Overview */}
        <header id="top" className="pb-8.5 pt-8 sm:pb-13 sm:pt-12">
          <BackLink />
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Case study
          </p>
          <h1 className="mt-2 font-serif text-5xl font-semibold tracking-tight sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
            {overview.summary}
          </p>

          <dl className="mt-6 grid max-w-3xl gap-x-8 gap-y-2 sm:grid-cols-[auto_1fr]">
            <dt className="font-semibold">Role</dt>
            <dd className="text-muted">{overview.role}</dd>
            <dt className="font-semibold">Dates</dt>
            <dd className="text-muted">{overview.dates}</dd>
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-line px-5 font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              <GitHubIcon />
              GitHub
              <span className="sr-only">repository for Plotline (opens in a new tab)</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-accent px-5 font-semibold text-on-accent transition-transform hover:-translate-y-0.5"
              >
                Live Demo
                <ExternalIcon />
                <span className="sr-only">of Plotline (opens in a new tab)</span>
              </a>
            )}
          </div>

          <h2 className="sr-only">Tech stack</h2>
          <ul className="mt-6 flex max-w-3xl flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t} className="rounded-xl bg-tag-bg px-3 py-1 text-sm font-medium text-tag-ink">
                {t}
              </li>
            ))}
          </ul>
        </header>

        <Section id="problem" eyebrow="01" title="The problem">
          <Reveal>
            <Prose paragraphs={plotline.problem} />
          </Reveal>
        </Section>

        <Section id="architecture" eyebrow="02" title="Architecture">
          <Reveal>
            <p className="max-w-3xl text-lg leading-relaxed">{architecture.intro}</p>
          </Reveal>
          <Reveal className="mt-8">
            <ArchitectureDiagram />
          </Reveal>
          <Reveal className="mt-8">
            <BulletList items={architecture.walkthrough} />
          </Reveal>
        </Section>

        <Section id="performance" eyebrow="03" title="The hard part: ~27s → near-instant">
          <Reveal>
            <ul className="grid gap-4 sm:grid-cols-3">
              {performance.stats.map((s) => (
                <li key={s.label} className="rounded-3xl border border-line bg-surface p-5 shadow-sm sm:p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                    {s.label}
                  </p>
                  <p className="mt-3 flex flex-wrap items-baseline gap-x-2 font-serif text-2xl font-semibold">
                    <span className="text-muted">{s.before}</span>
                    <span aria-hidden="true" className="text-accent">→</span>
                    <span className="sr-only">to</span>
                    <span className="text-accent">{s.after}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="mt-8">
            <Prose paragraphs={performance.body} />
          </Reveal>
        </Section>

        <Section id="recommender" eyebrow="04" title="Recommender design">
          <Reveal>
            <p className="max-w-3xl text-lg leading-relaxed">{recommender.intro}</p>
            <ul className="mt-6 grid max-w-3xl gap-4 sm:grid-cols-2">
              {recommender.signals.map((s) => (
                <li key={s.name} className="rounded-3xl border border-line bg-surface p-5 shadow-sm sm:p-6">
                  <h3 className="font-serif text-xl font-semibold">{s.name}</h3>
                  <p className="mt-2 leading-relaxed text-muted">
                    <RichText text={s.text} />
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>

        <Section id="degradation" eyebrow="05" title="Graceful degradation">
          <Reveal>
            <Prose paragraphs={plotline.degradation} />
          </Reveal>
        </Section>

        <Section id="security" eyebrow="06" title="Security">
          <Reveal>
            <BulletList items={plotline.security} />
          </Reveal>
        </Section>

        <Section id="testing" eyebrow="07" title="Testing & CI">
          <Reveal>
            <ul className="grid max-w-3xl gap-4 sm:grid-cols-2">
              {testing.stats.map((s) => (
                <li key={s.label} className="rounded-3xl border border-line bg-surface p-5 shadow-sm sm:p-6">
                  <p className="font-serif text-4xl font-semibold text-accent">{s.value}</p>
                  <p className="mt-1 text-muted">{s.label}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed">{testing.body}</p>
          </Reveal>
        </Section>

        {plotline.next.length > 0 && (
          <Section id="next" eyebrow="08" title="What I'd do next">
            <Reveal>
              <BulletList items={plotline.next} />
            </Reveal>
          </Section>
        )}

        <div className="pb-13">
          <BackLink />
        </div>
      </article>
    </SiteShell>
  );
}
