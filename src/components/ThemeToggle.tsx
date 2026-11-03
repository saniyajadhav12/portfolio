"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "./icons";

type Theme = "light" | "dark";

const media = "(prefers-color-scheme: dark)";

function getTheme(): Theme {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === "light" || chosen === "dark") return chosen;
  return window.matchMedia(media).matches ? "dark" : "light";
}

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(media);
  mq.addEventListener("change", onChange);
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => {
    mq.removeEventListener("change", onChange);
    observer.disconnect();
  };
}

export function ThemeToggle() {
  // null on the server: the real theme is only known in the browser
  const theme = useSyncExternalStore<Theme | null>(subscribe, getTheme, () => null);

  function toggle() {
    const next: Theme = getTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage unavailable (e.g. private mode): the choice just won't persist
    }
  }

  const label =
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme ? label : "Toggle color theme"}
      title={theme ? label : undefined}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
