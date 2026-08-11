// Site content sourced from Sean Slicer's resume.
// Centralized here so the section components stay presentational.

export type Job = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export type Project = {
  name: string;
  tagline: string;
  period: string;
  stack: string[];
  bullets: string[];
};

export type SkillGroup = {
  key: string; // stable id / React key
  label: string;
  items: string[];
};

export const ABOUT =
  "I'm Sean — a software engineer who likes shipping things that hold up. " +
  "I care about clean data, fast feedback loops, and tools that make a team " +
  "quicker. Lately I've leaned hard into AI-assisted, agentic development " +
  "workflows to move from idea to working software with less friction.";

export const SKILLS: SkillGroup[] = [
  {
    key: "languages",
    label: "Languages",
    items: ["TypeScript", "JavaScript", "C#", "SQL", "HTML/CSS"],
  },
  {
    key: "frameworks",
    label: "Frameworks & Libraries",
    items: [
      ".NET / ASP.NET Core",
      "Next.js",
      "React",
      "React Native",
      "Node.js",
      "tRPC",
      "Prisma",
      "Tailwind CSS",
      "Entity Framework",
    ],
  },
  {
    key: "ai_tooling",
    label: "AI & Tooling",
    items: [
      "LLM prompt engineering",
      "Agentic workflows (Claude Code, OpenCode)",
      "Local LLM inference (llama.cpp)",
      "Anthropic API",
      "GitHub Copilot",
    ],
  },
  {
    key: "data_search",
    label: "Data & Search",
    items: ["Elasticsearch", "OpenSearch", "PostgreSQL", "Redis", "SQL Server"],
  },
  {
    key: "cloud_devops",
    label: "Cloud & DevOps",
    items: ["Azure", "AWS (S3, CloudFront, Route 53)", "Docker", "Azure DevOps", "CI/CD", "Git"],
  },
  {
    key: "testing",
    label: "Testing",
    items: ["xUnit", "NUnit", "Vitest", "Selenium", "JUnit"],
  },
];

export const EXPERIENCE: Job[] = [
  {
    role: "Software Engineer",
    company: "Intercontinental Exchange (ICE)",
    location: "Remote",
    start: "Nov 2023",
    end: "Present",
    bullets: [
      "Build a RESO-compliant real estate data API that maps and transforms customer property records to MLS industry standards across multiple data partners.",
      "Manage Elasticsearch and OpenSearch indexes storing mapping configs, user records, and property listings queried across internal services.",
      "Built an Azure DevOps CI/CD pipeline that runs RESO certification tests and syncs mapping files from source control into Elasticsearch on each deploy.",
      "Own an internal admin tool for managing users, roles, and permissions, generating sample property data, and checking service health.",
      "Use Claude Code and structured prompt engineering day-to-day, cutting boilerplate and accelerating iteration on complex features.",
      "Write xUnit tests covering API behavior, data transformation rules, and integration boundaries.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Cybership",
    location: "Remote",
    start: "May 2023",
    end: "Oct 2023",
    bullets: [
      "Built the TypeScript frontend for a 3PL logistics platform with Next.js, tRPC, and Tailwind, connecting merchants with fulfillment and inventory workflows.",
      "Implemented data upload and storage pipelines for user accounts and product catalog information.",
      "Used LLM-assisted development to prototype UI and data schemas faster in a fast-moving startup.",
      "Integrated Zod for schema validation across user input flows for consistent error handling.",
    ],
  },
  {
    role: "Software Engineer",
    company: "First National Bank of Omaha",
    location: "Remote",
    start: "Sep 2022",
    end: "Aug 2023",
    bullets: [
      "Designed an ODS layer serving frequently accessed data without touching the mainframe, cutting query overhead for downstream consumers.",
      "Built secure REST API endpoints used by external credit card partners to retrieve customer account data.",
      "Researched and documented observability tooling for application and infrastructure monitoring.",
      "Wrote server-side JUnit tests and validated Angular frontend behavior with Selenium.",
    ],
  },
  {
    role: "Software Engineer II",
    company: "Chris-leef",
    location: "Lenexa, KS",
    start: "Mar 2022",
    end: "Aug 2022",
    bullets: [
      "Built a CMS integrated into the agent portal using Next.js, NextAuth, Prisma, and Tailwind.",
      "Took ownership of automation initiatives that reduced manual work and added new internal tooling capability.",
      "Mentored a Business Analyst transitioning into a software engineering career.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Evental",
    location: "Remote",
    start: "Jan 2020",
    end: "Mar 2022",
    bullets: [
      "Set up a CDN with AWS S3, CloudFront, Route 53, and Certificate Manager for low-latency global asset delivery.",
      "Built a serverless API on Vercel covering full CRUD for events, sessions, attendees, and users.",
      "Handled resource processing and S3 upload pipelines, optimizing for throughput and reliability.",
      "Used Zod for schema validation throughout user input flows.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Waypoint",
    tagline: "A Discord alternative for the desktop.",
    period: "2026 — Present",
    stack: ["Electron", "React 19", "TypeScript", "Fastify", "Postgres / Drizzle", "Redis", "LiveKit"],
    bullets: [
      "Realtime chat over a custom WebSocket gateway — messages, replies, attachments, link unfurls, GIFs, typing indicators, and presence, fanned out across nodes with Redis pub/sub.",
      "Ranked roles with bitfield permissions, private channels, and moderation, enforced identically on the server and in the client from one shared implementation.",
      "Auth built on argon2id, short-lived access JWTs, and rotating refresh tokens with theft detection, plus Google OIDC through the system browser with PKCE.",
      "One set of zod schemas in a shared package drives server validation, response serialization, and client types; typecheck, lint, and integration tests gate every push in CI.",
    ],
  },
  {
    name: "SoSoc",
    tagline: "A full social platform, built from scratch.",
    period: "2023 — Present",
    stack: ["Next.js 15", "tRPC", "Supabase", "Prisma", "TypeScript", "Vitest", "React Native / Expo"],
    bullets: [
      "Feed with infinite scroll, photo posts, real-time DMs and group chats, notifications, and private accounts with follow-request approval.",
      "Rolled custom JWT auth with bcrypt instead of a library, plus sliding-window rate limiting on all auth endpoints to block brute-force attempts.",
      "Shipped a React Native / Expo mobile app sharing the same tRPC API, with Supabase Realtime for live updates and expo-secure-store for tokens.",
      "Developed with agentic Claude Code workflows guided by a CLAUDE.md spec; fully typed with strict TypeScript and Vitest coverage.",
    ],
  },
];
