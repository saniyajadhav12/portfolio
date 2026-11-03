import type React from "react";
import { hero, site } from "@/data/content";
import { HeroPhoto } from "../HeroPhoto";
import { ExternalIcon } from "../icons";

// Stagger order for the entrance animation (see .hero-item in globals.css)
const order = (i: number) => ({ "--i": i }) as React.CSSProperties;

export function Hero() {
  // Keep the last word of the greeting together with "." and the 👋, so it
  // can only wrap as e.g. "Hi, I'm" / "Saniya. 👋"
  const words = hero.greeting.split(" ");
  const lastWord = words.pop();

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="pb-8.5 pt-10 sm:pb-13 sm:pt-20"
    >
      {/* Layout lives in .hero-grid (globals.css): photo beside the greeting
          on phones, beside the whole text block from 600px */}
      <div className="hero-grid gap-x-4 min-[600px]:gap-x-8 md:gap-x-12">
        <p
          style={order(1)}
          className="hero-item mb-8 inline-flex items-center gap-2 justify-self-start rounded-2xl border border-line bg-surface px-4 py-1.5 text-sm font-medium text-ink shadow-sm [grid-area:badge]"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
            <span className="ping-3 absolute inline-flex h-full w-full rounded-full bg-ok opacity-0" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ok" />
          </span>
          {/* Parts wrap between each other, never mid-phrase, and the "·"
              is hidden when a part starts a new line (see .badge-parts) */}
          <span className="badge-parts">
            <span>
              {hero.badge.split(" · ").map((part) => (
                <span key={part}>{part}</span>
              ))}
            </span>
          </span>
        </p>

        {/* Each sentence is its own inline block, so the line wraps between
            sentences rather than leaving one word behind */}
        <p
          style={order(0)}
          className="hero-item mb-3 font-serif text-base italic text-accent [grid-area:line] sm:text-lg"
        >
          {hero.line.split(/(?<=[.!?])\s+/).map((sentence, i) => (
            <span key={sentence}>
              {i > 0 && " "}
              <span className="inline-block">{sentence}</span>
            </span>
          ))}
        </p>

        <h1
          id="hero-heading"
          style={order(2)}
          className="hero-item self-center font-serif text-[clamp(1.625rem,8.2vw,3rem)] font-semibold tracking-tight [grid-area:greet] min-[600px]:self-auto min-[600px]:text-[clamp(2.25rem,calc((100vw-306px)/8.6),3rem)] md:text-[2.75rem] lg:text-7xl"
        >
          {words.join(" ")}{" "}
          <span className="whitespace-nowrap">
            {lastWord}
            <span className="text-accent">.</span>{" "}
            <span aria-hidden="true" className="wave inline-block">
              👋
            </span>
          </span>
        </h1>

        <div
          style={order(2)}
          className="hero-item self-center justify-self-end [grid-area:photo]"
        >
          <HeroPhoto />
        </div>

        <p
          style={order(3)}
          className="hero-item mt-6 max-w-2xl text-lg leading-relaxed text-muted [grid-area:tagline] sm:text-xl"
        >
          {hero.tagline}
        </p>

        <div
          style={order(4)}
          className="hero-item mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 [grid-area:buttons]"
        >
          <a
            href="#projects"
            className="rounded-full bg-accent px-5 py-3 font-semibold text-on-accent shadow-md shadow-accent/20 transition-transform hover:-translate-y-0.5 sm:px-6"
          >
            View Projects
          </a>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-accent px-5 py-2.5 font-semibold text-accent transition-colors hover:bg-tag-bg sm:px-6"
          >
            Resume
            <ExternalIcon />
            <span className="sr-only">(PDF, opens in a new tab)</span>
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
