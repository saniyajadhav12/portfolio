// ─────────────────────────────────────────────────────────────────────────────
// ALL SITE TEXT LIVES HERE. Edit this file to update the website — no need to
// touch any component.
//
// Formatting tip: wrap words in **double asterisks** to make them bold
// (works in experience bullets and project highlights).
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Saniya Jadhav",
  initials: "SJ",
  // Browser tab title
  title: "Saniya Jadhav — Software Engineer",
  // Shown in Google results and link previews
  description:
    "Software engineer with 2+ years shipping production React and React Native apps, now building full-stack and AI-powered products. MS in Software Engineering Systems at Northeastern University, graduating Dec 2026.",
  // Hero photo description for screen readers
  photoAlt: "Photo of Saniya Jadhav",
  resumeUrl: "/resume.pdf",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  // Small italic line above the greeting. On narrow screens it wraps
  // between sentences rather than mid-sentence.
  line: "Good software should feel obvious. Building it rarely is.",
  greeting: "Hi, I'm Saniya",
  tagline:
    "Software engineer with 2+ years shipping production React and React Native apps, now building full-stack and AI-powered products.",
  badge: "Open to full-time SWE roles · Starting Dec 2026",
};

export const about = {
  paragraphs: [
    "I'm a software engineer with 2+ years of industry experience building production React and React Native apps at Capgemini and SS&C Intralinks. Across both roles, my focus has been performance and accessibility: making screens faster and making sure they work for everyone, including people using screen readers.",
    "Now I'm pursuing an MS in Software Engineering Systems at Northeastern University in Boston, and building full-stack apps end to end with Next.js, Python/FastAPI, Node.js, PostgreSQL and LLM APIs, hardened with security, testing and CI. I graduate in December 2026 and I'm looking for full-time Software Engineer, Software Developer, Full-Stack and Frontend roles.",
  ],
  // One closing sentence after the paragraphs (set to "" to hide)
  closing:
    "Outside of code, you'll usually find me listening to music, watching movies and series, or folding origami.",
  // The "through-line" cards under the About text
  highlights: [
    {
      stat: "27%",
      label: "performance improvement on React Native banking screens",
      source: "Capgemini",
    },
    {
      stat: "Accessibility",
      label: "fixes in shared Storybook web components",
      source: "SS&C Intralinks",
    },
    {
      stat: "~27s → near-instant",
      label: "movie recommendations",
      source: "Plotline",
    },
  ],
};

// "Now" card at the end of the About section. It only appears once at least
// one of building / learning is filled in. Example:
//   building: "…", learning: "…", updated: "Dec 2026"
export const now = {
  building: "",
  learning: "",
  // Month shown as "Updated …" on the card
  updated: "",
};

export type Job = {
  role: string;
  company: string;
  location?: string;
  dates: string;
  // One line shown on the timeline; the bullets sit behind "Show details"
  summary: string;
  bullets: string[];
  // Set to false to hide this entry without deleting it
  show: boolean;
};

export const experience: Job[] = [
  {
    role: "Software Engineer Co-op",
    company: "SS&C Intralinks",
    dates: "Aug 2025 – Dec 2025",
    show: true,
    summary:
      "Built production features and fixed UI, data and accessibility issues in enterprise React and TypeScript apps, including authentication and account-recovery flows.",
    bullets: [
      "Built production features for enterprise-scale React and TypeScript applications within a large shared codebase.",
      "Implemented condition-based logic in authentication and account recovery workflows to support multiple authentication methods, and authored design-level documentation of system flows for cross-functional teams.",
      "Resolved production UI and data issues across navigation flow, pagination, and data rendering; removed unused framework code to align with internal engineering standards.",
      "Improved **UI responsiveness** across core workflows and fixed **accessibility issues** in shared Storybook web components.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Capgemini",
    location: "Mumbai",
    dates: "July 2022 – July 2024",
    show: true,
    summary:
      "Optimized a major Italian bank's React Native app: 27% faster screens, 51% fewer crashes, and stronger screen-reader accessibility.",
    bullets: [
      "Optimized React Native screens (home, cards, spending statistics) for a major Italian bank's iOS/Android app, **improving performance by 27%** and boosting user retention.",
      "Integrated RESTful APIs for real-time banking transactions, improving data retrieval efficiency and reducing processing delays.",
      "Resolved critical production issues tracked in Jira, **reducing crash rates by 51%**; onboarded 3 new teammates.",
      "Enhanced **accessibility, including screen reader support**, **improving usability by 19%** and meeting accessibility standards.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Capgemini",
    location: "Mumbai",
    dates: "April 2022 – May 2022",
    show: false,
    summary:
      "Built a cross-platform iOS/Android hydration tracker with data visualizations and reminders.",
    bullets: [
      "Engineered a cross-platform iOS/Android hydration tracker with weekly/monthly data visualizations and reminders.",
    ],
  },
];

export type Project = {
  title: string;
  type: "Solo" | "Team → extended solo";
  dates: string;
  summary: string;
  tech: string[];
  github: string;
  liveUrl?: string;
  // Link to a case study page on this site, if there is one
  caseStudy?: string;
  // Team projects only: what I personally built during the team phase
  teamWork?: string[];
  // Solo work (for team projects: what I added after the course)
  highlights: string[];
};

// Shown in this order
export const projects: Project[] = [
  {
    title: "Plotline",
    type: "Solo",
    dates: "Sept 2026 – Present",
    summary:
      "AI-powered movie recommendation platform, built and deployed end to end.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Tailwind",
      "Python 3.12",
      "FastAPI",
      "SQLAlchemy",
      "Alembic",
      "PostgreSQL 16 + pgvector",
      "scikit-learn",
      "SciPy",
      "Gemini API",
      "Docker",
      "GitHub Actions",
      "Vercel",
      "Render",
      "Neon",
    ],
    github: "https://github.com/saniyajadhav12/plotline",
    liveUrl: "https://plotline-nine.vercel.app",
    caseStudy: "/projects/plotline",
    highlights: [
      "Hybrid recommender: item-to-item collaborative filtering over 6.45M MovieLens ratings blended with TF-IDF content-based filtering (genres, director, cast, plot).",
      "Offline pipeline precomputing top-50 neighbours: **recommendations ~27s → near-instant**, in-memory matrices ~1.7 GB → none, **database 2.45 GB → 291 MB**, enabling free-tier deployment.",
      "Gemini-generated \"why you'll like this\" explanations with a templated fallback and a circuit breaker for quota errors.",
      "Backend-for-frontend: Next.js API routes call FastAPI server-side; JWT in an httpOnly cookie.",
      "Password reset email routed through a Vercel server route (Render blocks SMTP), with rate limiting and single-use links; also closed a hole where reset tokens leaked in API responses.",
      "**97 backend (Pytest) + 74 frontend (Jest/RTL) tests**; GitHub Actions runs lint, tests and Docker builds on every PR and auto-deploys on merge.",
    ],
  },
  {
    title: "PawConnect",
    type: "Team → extended solo",
    dates: "Sept 2024 – Present",
    summary:
      "Full-stack pet adoption and care platform. Started as a 4-person Northeastern team project, then extended solo.",
    tech: [
      "React 18",
      "TypeScript",
      "Vite",
      "Material UI",
      "Redux Toolkit",
      "i18next",
      "Node.js",
      "Express",
      "MongoDB/Mongoose",
      "JWT",
      "bcrypt",
      "zod",
      "helmet",
      "Google Maps + Places API",
      "Jest",
      "Supertest",
      "GitHub Actions",
    ],
    github: "https://github.com/saniyajadhav12/PawConnect",
    teamWork: [
      "Sign-up/login with API integration.",
      "\"Pet Salons Near You\" (Google Maps).",
      "NGO management page.",
    ],
    highlights: [
      "JWT auth and **role-based access control** (USER/NGO/ADMIN) with ownership checks and frontend route guards.",
      "**Security hardening:** rate limiting, helmet, zod field whitelisting to block mass assignment, request size limits, configurable CORS; fixed plain-text password updates and leaked hashes/stack traces.",
      "Consolidated four near-duplicate map pages (~880 lines) into one reusable component; **bundle 777 KB → 635 KB**.",
      "Fixed 19 TypeScript build errors; **dependency vulnerabilities 38 → 0**.",
      "19 backend API tests (Jest, Supertest, in-memory MongoDB) with CI on every push.",
    ],
  },
  {
    title: "TripSync",
    type: "Team → extended solo",
    dates: "Fall 2024; extended 2026",
    summary:
      "Full-stack travel itinerary manager. Started as a 5-person team project for Northeastern CSYE 6200 (Fall 2024), extended solo in 2026.",
    tech: [
      "React 18",
      "TypeScript",
      "Vite",
      "Material UI",
      "Java 21",
      "Spring Boot 3.4",
      "Spring Security",
      "JWT",
      "MySQL",
      "JUnit",
      "MockMvc",
      "Vitest",
      "GitHub Actions",
    ],
    github: "https://github.com/saniyajadhav12/TripSync",
    teamWork: [
      "Login/Sign Up UI with backend integration.",
      "Accommodation data model.",
      "Wireframes for Trip Details and Activity Management.",
    ],
    highlights: [
      "Stateless JWT auth with BCrypt, DTOs so hashes are never returned, ownership checks returning 404 (not 403) so other users' data isn't confirmed to exist.",
      "Bean Validation with custom date constraints and a global exception handler returning consistent JSON errors.",
      "Replaced an overflow-x: hidden band-aid with real responsive fixes; tracked down a case-sensitive import that only broke on Linux CI.",
      "**~50 automated tests** (36 backend, 14 frontend) with GitHub Actions CI.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    group: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "Redux",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Material UI",
      "D3.js",
      "Storybook",
    ],
  },
  {
    group: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "RESTful APIs",
      "JWT Authentication",
      "Role-Based Access Control",
    ],
  },
  {
    group: "Databases",
    items: [
      "PostgreSQL (pgvector, SQLAlchemy, Alembic)",
      "MongoDB (Mongoose)",
      "MySQL",
      "Firebase",
    ],
  },
  {
    group: "AI & ML",
    items: [
      "Gemini API",
      "scikit-learn",
      "SciPy",
      "sentence-transformers",
      "TF-IDF",
      "recommendation systems",
    ],
  },
  {
    group: "DevOps & Testing",
    items: [
      "Docker",
      "GitHub Actions (CI/CD)",
      "Vercel",
      "Pytest",
      "Jest",
      "React Testing Library",
      "Supertest",
    ],
  },
  {
    group: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Xcode",
      "Android Studio",
      "Jira",
      "Figma",
    ],
  },
];

export const education = [
  {
    school: "Northeastern University",
    location: "Boston, MA",
    degree: "MS, Software Engineering Systems",
    dates: "Expected Dec 2026",
    // Set to null to hide
    gpa: "3.78/4.0" as string | null,
    courses: [
      "Web Development",
      "Object-Oriented Design",
      "Software Engineering",
      "Computational Skepticism for AI",
    ],
  },
  {
    school: "D.Y. Patil College of Engineering (Pune University)",
    location: null as string | null,
    degree: "Bachelor of Engineering, Electronics and Telecommunication",
    dates: "June 2018 – June 2022",
    gpa: null as string | null,
    courses: [] as string[],
  },
];

export const contact = {
  heading: "Let's talk",
  blurb:
    "I'm looking for full-time Software Engineer, Software Developer, Full-Stack and Frontend roles. If you think I'd be a good fit for your team, I'd love to hear from you — email is the best way to reach me.",
  // Short line shown above the contact buttons
  availability: "Available for full-time SWE roles starting December 2026.",
  email: "jadhav.sani@northeastern.edu",
  linkedin: "https://www.linkedin.com/in/saniya-jadhav-a80a2b207/",
  github: "https://github.com/saniyajadhav12",
  location: "Boston, MA",
};

export const footer = {
  text: "© 2026 Saniya Jadhav",
};
