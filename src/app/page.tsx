import { footer } from "@/data/content";
import { Header } from "@/components/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="relative isolate">
      {/* Reading progress (hidden for reduced motion / unsupported browsers) */}
      <div
        aria-hidden="true"
        className="scroll-progress pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] bg-accent"
      />
      {/* Soft organic shapes behind the hero. Clipped to the page width so
          they never cause sideways scrolling or mobile zoom-out. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[52rem] overflow-hidden"
      >
        <div className="blob-a absolute -right-24 -top-10 h-72 w-72 rounded-[45%_55%_60%_40%] bg-blob opacity-30 blur-3xl sm:h-96 sm:w-96" />
        <div className="blob-b absolute -left-20 top-[26rem] h-56 w-56 rounded-[60%_40%_45%_55%] bg-tag-bg opacity-70 blur-3xl" />
      </div>
      <Header />
      <main id="main" className="mx-auto max-w-5xl px-5 sm:px-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-8 text-center text-sm text-muted sm:px-8">
          {footer.text}
        </div>
      </footer>
    </div>
  );
}
