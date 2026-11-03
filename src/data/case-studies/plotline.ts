// ─────────────────────────────────────────────────────────────────────────────
// PLOTLINE CASE STUDY TEXT (/projects/plotline). Edit freely; the page layout
// reads everything from here. Stack and links come from the Plotline entry in
// src/data/content.ts, so they stay in sync with the project card.
//
// Wrap words in **double asterisks** to make them bold.
// ─────────────────────────────────────────────────────────────────────────────

export const plotline = {
  // Browser tab title and link-preview text
  metaTitle: "Plotline case study — Saniya Jadhav",
  metaDescription:
    "How I built and deployed Plotline, an AI-powered movie recommendation platform: hybrid recommender, ~27s → near-instant recommendations, free-tier deployment, security and CI.",

  overview: {
    summary:
      "An AI-powered movie recommendation platform, built and deployed end to end. It blends item-to-item collaborative filtering with content-based filtering, and explains its picks with short \"why you'll like this\" notes.",
    role: "Solo: designed, built and deployed end to end",
    dates: "Sept 2026 – Present",
  },

  // Screenshots under the Overview (files in /public/projects). The first two
  // are wide desktop shots; the last is a phone shot shown beside them on
  // large screens. Set to [] to hide the gallery.
  gallery: [
    {
      src: "/projects/plotline-gallery-recommendations.webp",
      width: 1440,
      height: 420,
      alt: "Plotline's Recommended for You row, with posters for Tenet, No Country for Old Men, The Departed, Batman Begins and more.",
      caption: "Personalized recommendations on the home page.",
    },
    {
      src: "/projects/plotline-gallery-explanation.webp",
      width: 1440,
      height: 827,
      alt: "Plotline's movie page for Tenet, with a \"Why this was recommended\" box explaining the pick.",
      caption: "Each recommendation explains itself.",
    },
    {
      src: "/projects/plotline-gallery-mobile.webp",
      width: 780,
      height: 1688,
      alt: "The Tenet movie page on a phone, including the \"Why this was recommended\" box.",
      caption: "The same page on a phone.",
    },
  ],

  problem: [
    "I wanted to learn how recommendation systems actually work by building one from scratch, from data ingestion to a deployed, tested product. I also gave myself a hard constraint: it had to run entirely on free-tier infrastructure, which is what forced the biggest performance work.",
  ],

  architecture: {
    intro:
      "The browser talks to the Next.js app, whose API routes call the backend server-side.",
    walkthrough: [
      "**Next.js 16 on Vercel** serves the pages. Its API routes act as a backend-for-frontend: they call FastAPI server-side, and the session JWT lives in an httpOnly cookie.",
      "**FastAPI (Python 3.12) on Render** serves recommendations from **PostgreSQL 16 on Neon**, using SQLAlchemy and Alembic.",
      "An **offline precompute pipeline** builds each movie's top-50 neighbours and writes them to PostgreSQL ahead of time.",
      "For password resets, FastAPI issues the reset token only to a **Next.js server route on Vercel**, protected by a shared internal API key. That route sends the email via **Gmail SMTP**.",
      "The **Gemini API** writes the \"why you'll like this\" explanations, with a templated fallback and a circuit breaker for quota errors.",
    ],
  },

  performance: {
    stats: [
      { before: "~27s", after: "near-instant", label: "recommendations" },
      { before: "~1.7 GB", after: "none", label: "in-memory matrices" },
      { before: "2.45 GB", after: "291 MB", label: "database size" },
    ],
    body: [
      "Before this change, recommendations took **around 27 seconds** and needed about **1.7 GB of matrices in memory**.",
      "I moved that work into an **offline pipeline that precomputes each movie's top-50 neighbours**. Recommendations became near-instant, the in-memory matrices went away entirely, and the database went from **2.45 GB to 291 MB**.",
      "That is what made the free-tier constraint achievable: the whole app now deploys on free tiers.",
    ],
  },

  recommender: {
    intro: "Plotline is a hybrid recommender that blends two signals:",
    signals: [
      {
        name: "Collaborative filtering",
        text: "Item-to-item cosine similarity over **6.45M MovieLens ratings**: movies that people rate alike end up as neighbours.",
      },
      {
        name: "Content-based filtering",
        text: "**TF-IDF** over each movie's genres, director, cast and plot.",
      },
    ],
  },

  degradation: [
    "Each recommendation can come with a Gemini-generated **\"why you'll like this\"** explanation.",
    "Explanations have a **templated fallback**, and a **circuit breaker** handles Gemini quota errors, so recommendations keep working when Gemini can't help.",
  ],

  security: [
    "**Password reset through a Vercel server route**, because Render blocks SMTP. FastAPI issues the reset token only to that route, protected by a **shared internal API key**, and the route sends the email via Gmail SMTP.",
    "**Rate limiting** on password reset.",
    "**Single-use reset links**, validated when opened.",
    "**Closed a production token-exposure issue**, where reset tokens were leaking in API responses.",
    "**JWT in an httpOnly cookie**, handled by the Next.js backend-for-frontend.",
  ],

  testing: {
    stats: [
      { value: "97", label: "backend tests (Pytest)" },
      { value: "74", label: "frontend tests (Jest + React Testing Library)" },
    ],
    body: "GitHub Actions runs lint, tests and Docker builds on every pull request, and auto-deploys on merge.",
  },

  // Leave empty ([]) to hide the "What I'd do next" section
  next: [
    "Expose semantic search in the UI (the pgvector embeddings are already built).",
    "Add Google sign-in.",
  ],
};
