"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/data/content";
import { CloseIcon, MenuIcon } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Scroll-spy: the section crossing a band in the middle of the screen
  // is the one being read.
  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    // Above the first section (the hero), nothing is active
    const top = document.getElementById("top");
    const heroObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setActive(null),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    if (top) heroObserver.observe(top);
    return () => {
      observer.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    // Close if the window grows past the mobile breakpoint
    const mq = window.matchMedia("(min-width: 768px)");
    const onResize = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:h-16 sm:px-8">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="-ml-2 inline-flex h-11 min-w-11 items-center justify-center px-2 font-serif text-xl font-semibold tracking-tight text-ink"
          aria-label={`${site.name}, back to top`}
        >
          {site.initials}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm font-medium lg:gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? "location" : undefined}
                  className={`spy-link relative inline-flex h-11 items-center px-2.5 transition-colors after:absolute after:inset-x-2.5 after:bottom-2 after:h-0.5 after:origin-left after:rounded-full after:bg-accent hover:text-accent ${
                    active === item.href
                      ? "text-ink after:scale-x-100"
                      : "text-muted after:scale-x-0"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Always rendered so it can slide open; inert (unfocusable) while closed.
          Overlays the page (absolute) so opening/closing never shifts content,
          which would throw off the scroll position after tapping a link. */}
      <div
        className={`absolute inset-x-0 top-full grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          inert={!open}
          className={`overflow-hidden bg-bg ${open ? "border-y border-line shadow-lg" : ""}`}
        >
          <ul className="mx-auto flex max-w-5xl flex-col px-5 py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-xl px-3 font-medium text-ink hover:bg-tag-bg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
