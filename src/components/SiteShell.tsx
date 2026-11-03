import type { ReactNode } from "react";
import { footer } from "@/data/content";
import { Header } from "./Header";

/**
 * Page frame shared by every page: reading-progress bar, background shapes,
 * header, main content area and footer. `navBase` is prepended to the nav's
 * "#section" links ("/" on sub-pages, so they lead back to the homepage).
 */
export function SiteShell({
  children,
  navBase = "",
}: {
  children: ReactNode;
  navBase?: string;
}) {
  return (
    <div className="relative isolate">
      {/* Reading progress (hidden for reduced motion / unsupported browsers) */}
      <div
        aria-hidden="true"
        className="scroll-progress pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] bg-accent"
      />
      {/* Soft organic shapes behind the top of the page. Clipped to the page
          width so they never cause sideways scrolling or mobile zoom-out. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[52rem] overflow-hidden"
      >
        <div className="blob-a absolute -right-24 -top-10 h-72 w-72 rounded-[45%_55%_60%_40%] bg-blob opacity-30 blur-3xl sm:h-96 sm:w-96" />
        <div className="blob-b absolute -left-20 top-[26rem] h-56 w-56 rounded-[60%_40%_45%_55%] bg-tag-bg opacity-70 blur-3xl" />
      </div>
      <Header navBase={navBase} />
      <main id="main" className="mx-auto max-w-5xl px-5 sm:px-8">
        {children}
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-8 text-center text-sm text-muted sm:px-8">
          {footer.text}
        </div>
      </footer>
    </div>
  );
}
