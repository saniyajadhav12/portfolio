import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site } from "@/data/content";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Absolute base for link-preview image URLs. On Vercel this is the
// production domain; locally it's the dev server.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.title,
  description: site.description,
  authors: [{ name: site.name }],
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f6f2" },
    { media: "(prefers-color-scheme: dark)", color: "#141b1d" },
  ],
};

// Runs before paint: restores a saved theme choice (avoids a flash of the
// wrong theme), marks JS as available so scroll animations can run, and
// pauses the drifting background shapes while the tab is hidden.
const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');document.addEventListener('visibilitychange',function(){d.toggleAttribute('data-tab-hidden',document.hidden)});try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')d.dataset.theme=t;}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen overflow-x-clip font-sans">
        {children}
      </body>
    </html>
  );
}
