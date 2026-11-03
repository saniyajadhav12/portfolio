import { contact } from "@/data/content";
import { GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from "../icons";
import { Reveal } from "../Reveal";
import { Section } from "../Section";

export function Contact() {
  return (
    <Section id="contact" title={contact.heading} eyebrow="Contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface p-6 shadow-sm sm:p-12">
          <div
            aria-hidden="true"
            className="blob-b pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-[45%_55%_60%_40%] bg-blob opacity-25 blur-3xl"
          />
          <p className="relative max-w-2xl text-lg leading-relaxed">
            {contact.blurb}
          </p>
          <p className="relative mt-3 inline-flex items-center gap-1.5 text-muted">
            <PinIcon />
            {contact.location}
          </p>
          <p className="relative mt-6 font-semibold text-accent">
            {contact.availability}
          </p>
          <div className="relative mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-on-accent shadow-md shadow-accent/20 transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <MailIcon />
              Email me
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border-2 border-line px-6 py-2.5 font-semibold transition-colors hover:border-accent hover:text-accent sm:w-auto"
            >
              <LinkedInIcon />
              LinkedIn
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border-2 border-line px-6 py-2.5 font-semibold transition-colors hover:border-accent hover:text-accent sm:w-auto"
            >
              <GitHubIcon />
              GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
          <p className="relative mt-6 text-muted">
            Or write to{" "}
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex min-h-11 items-center font-medium text-ink underline decoration-accent underline-offset-4 [overflow-wrap:anywhere] hover:text-accent"
            >
              {/* Allow a line break after "@" on very narrow screens */}
              <span>
                {contact.email.split("@")[0]}@<wbr />
                {contact.email.split("@")[1]}
              </span>
            </a>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
