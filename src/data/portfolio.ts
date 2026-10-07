// All portfolio content lives here. Replace the [placeholders] as you go.

export type Project = {
  slug: string;
  title: string;
  type: string;
  year?: string;
  status?: "featured" | "in-progress";
  summary: string;
  highlights?: string[];
  stack: string[];
  links: { label: string; href: string }[];
};

export type Job = {
  hash: string;
  period: string;
  role: string;
  org: string;
  commit: string;
  location?: string;
  type?: string;
  highlights?: string[];
  stack?: string[];
  current?: boolean;
};

export const portfolio = {
  name: "Kyle Vincent Manuel",
  handle: "kyle",
  tagline:
    "Software engineer building mobile and web apps that people actually use. I like taking ideas from a rough sketch to something shipped.",
  location: "Philippines · UTC+8",
  now: "building a receipt bookkeeping tool",
  openToWork: true,
  email: "[kylevincentmanuel@gmail.com]",
  resumeHref: "#",
  social: [
    { label: "github", href: "https://github.com/kai-dev00" },
    {
      label: "linkedin",
      href: "https://www.linkedin.com/in/kyle-manuel-238262312/",
    },
  ],
  stats: [
    { value: "[X]+", label: "years coding" },
    { value: "[X]", label: "projects built" },
    { value: "[X]", label: "apps in users' hands" },
    { value: "∞", label: "cups of kape" },
  ],
  projects: [
    {
      slug: "badminton-app",
      title: "Badminton app",
      type: "mobile",
      status: "featured",
      summary:
        "[What the app does and who it's for, in one or two sentences. What problem made you build it?]",
      highlights: [
        "[Key feature or technical challenge you solved]",
        "[Backend, auth or data work with Supabase]",
        "Built and packaged the Android release",
      ],
      stack: ["Expo", "React Native", "Supabase", "TypeScript"],
      links: [
        { label: "case study →", href: "#" },
        { label: "github ↗", href: "#" },
        { label: "download apk ↗", href: "#" },
      ],
    },
    {
      slug: "receipt-bookkeeping",
      title: "Receipt bookkeeping tool",
      type: "SaaS · web",
      status: "in-progress",
      summary:
        "A tool to help Philippine bookkeepers organize receipts and records. [Add the core idea in one line.]",
      stack: ["[Stack]"],
      links: [{ label: "follow the build →", href: "#" }],
    },
    {
      slug: "project-three",
      title: "[Project name]",
      type: "[type]",
      year: "[year]",
      summary: "[One or two lines on what it is and the result.]",
      stack: ["[Stack]"],
      links: [{ label: "view project →", href: "#" }],
    },
  ] satisfies Project[],
  experience: [
    {
      hash: "a3f9c21",
      period: "[2024] — present",
      role: "[Role]",
      org: "[Company]",
      commit: "feat: [what you work on and one result you're proud of]",
      location: "[City / Remote]",
      type: "Full-time",
      highlights: [
        "[Biggest thing you shipped, with a number if you have one]",
        "[Something you improved: speed, reliability, UX]",
        "[How you worked with the team]",
      ],
      stack: ["React", "TypeScript", "Supabase"],
      current: true,
    },
    {
      hash: "7be104d",
      period: "[2022] — [2024]",
      role: "[Role]",
      org: "[Company]",
      commit: "feat: [main responsibilities and impact]",
      location: "[City / Remote]",
      type: "[Contract / Internship]",
      highlights: ["[Main responsibility and result]", "[Another win]"],
      stack: ["[Stack]"],
    },
    {
      hash: "0c1e5a8",
      period: "[year]",
      role: "[Degree]",
      org: "[School]",
      commit: "init: wrote my first hello world",
    },
  ] satisfies Job[],
  skills: {
    "Languages & Frameworks": [
      "C#",
      "TypeScript",
      "JavaScript",
      "React",
      "Remix",
      "React Native",
      "Node.js",
    ],
    "Backend & Databases": [
      ".NET",
      "Entity Framework Core",
      "Prisma",
      "SQL Server",
      "PostgreSQL",
      "Firebase",
    ],
    "Tools & Practices": ["Git", "Figma", "Azure DevOps", "Agile", "Expo Go"],
    "AI": ["Claude Code"],
    "IDEs & Editors": ["Visual Studio", "Visual Studio Code", "SSMS"],
    "Data Warehousing": ["Snowflake", "WhereScape"],
  } as Record<string, string[]>,
  about: [
    "[A short paragraph about you: how you got into coding and what kind of problems you enjoy.]",
    "[A second line on how you work, like caring about clean UI, shipping fast, or learning by building side projects.]",
  ],
};
