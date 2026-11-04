// All portfolio content lives here. Replace the [placeholders] as you go.

export type ProjectCategory = "website" | "web-app" | "mobile-app";

// Order and wording of the groups on the /projects page.
export const categories: {
  id: ProjectCategory;
  label: string;
  blurb: string;
}[] = [
  {
    id: "website",
    label: "Websites",
    blurb: "Sites built to inform and look good.",
  },
  {
    id: "web-app",
    label: "Web apps",
    blurb: "Browser-based apps with real logic behind them.",
  },
  {
    id: "mobile-app",
    label: "Mobile apps",
    blurb: "Apps built for phones and tablets.",
  },
];

export type Project = {
  slug: string;
  title: string;
  websiteUrl?: string;
  category: ProjectCategory;
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
  openToWork: true,
  email: "[kylevincentmanuel@gmail.com]",
  resumeHref: "/Kyle-Manuel-Resume.pdf",
  social: [
    { label: "github", href: "https://github.com/kai-dev00" },
    {
      label: "linkedin",
      href: "https://www.linkedin.com/in/kyle-manuel-238262312/",
    },
  ],
  // "years in web dev" counts up from this date (YYYY-MM).
  careerStart: "2024-06",
  // Extra stats shown after the computed ones (years, projects, technologies) in Stats.tsx.
  stats: [{ value: "∞", label: "cups of kape" }],
  projects: [
    {
      slug: "featured-project",
      category: "website",
      title: "Better Plaridel",
      websiteUrl:
        "https://betterplaridel-git-main-kai-dev00s-projects.vercel.app/",
      type: "website",
      status: "featured",
      summary:
        "A volunteer-driven civic technology initiative and open-source project focused on making government data in Plaridel, Bulacan more accessible, understandable, and useful to the community. The project was developed as part of BetterGov.ph, promoting transparency, public access to information, and data-driven civic engagement at the local level.",
      highlights: [
        "Managed the project's GitHub repository, including code organization, version control, and collaboration.",
        "Handled application deployment, configuration, and release management.",
        "Contributed to the project's technical development and overall delivery as part of BetterGov.ph.",
      ],
      stack: ["NextJs", "Vercel"],
      links: [
        {
          label: "Github ↗",
          href: "https://github.com/kai-dev00/betterplaridel",
        },
        { label: "Better Gov Ph ↗", href: "https://bettergov.ph/" },
      ],
    },
    {
      slug: "badminton-app",
      category: "mobile-app",
      title: "Shuttleon",
      type: "badminton scroing app",
      summary:
        "A mobile app for running badminton tournaments. It generates the bracket and keeps score for every match, so organizers don't have to track it on paper.",
      stack: ["Expo", "React Native", "Supabase", "TypeScript"],
      links: [],
    },
    {
      slug: "todahero",
      category: "mobile-app",
      title: "TodaHero",
      type: "ride-hailing app",
      summary:
        "A ride-hailing app built solely for tricycle drivers. Built with React Native and Node.js, with Firebase for user data, Expo Go for testing, and deployed on a Raspberry Pi for kiosk use.",
      stack: ["React Native", "Node.js", "Firebase", "Expo Go", "Raspberry Pi"],
      links: [],
    },
    {
      slug: "bean-counter",
      category: "web-app",
      title: "Bean Counter",
      type: "inventory system",
      status: "featured",
      summary:
        "An internal back-office app for a coffee shop that replaces spreadsheets for tracking stock, ordering from suppliers and seeing what needs restocking. Staff join by invite, and what each person can do depends on their role.",
      highlights: [
        "Role-based access: admins build custom roles from 27 permissions, enforced on the server and in the UI",
        "Purchase orders go from draft to received, which adds the stock to inventory automatically",
        "Dashboard with spend trends, stock health, top suppliers and a live activity feed",
        "Audit trail that records before/after changes for every create, update and delete",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
        "Shadcn",
        "Upstash",
      ],
      links: [],
    },
  ] satisfies Project[],
  experience: [
    {
      hash: "a3f9c21",
      period: "June 2024 — present",
      role: "Software Developer",
      org: "Microsource Inc.",
      commit: "feat: web apps, HR systems and data pipelines, front to back",
      highlights: [
        "Built a responsive, accessible website with Remix, React, Shadcn and Tailwind CSS that improved usability and performance.",
        "Developed an HRIS with Remix, TypeScript, Prisma and PostgreSQL, automating HR workflows and cutting manual processes.",
        "Maintain and enhance an enterprise web app: .NET, Entity Framework Core and SQL on the backend, React and TypeScript on the frontend.",
        "Maintain ETL processes in .NET and Snowflake, and support WhereScape (DEV) ETL workflows for accurate, reliable warehouse data.",
        "Work in Agile teams: daily stand-ups and retrospectives to deliver features on time.",
      ],
      stack: [
        "Remix",
        "React",
        "TypeScript",
        "Shadcn",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        ".NET",
        "Entity Framework Core",
        "SQL Server",
        "Snowflake",
        "WhereScape",
        "Agile",
      ],
      current: true,
    },
    {
      hash: "0c1e5a8",
      period: "2020 — 2024",
      role: "BS Computer Engineering",
      org: "Bulacan State University",
      location: "Meneses Campus",
      type: "Education",
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
    AI: ["Claude Code"],
    "IDEs & Editors": ["Visual Studio", "Visual Studio Code", "SSMS"],
    "Data Warehousing": ["Snowflake", "WhereScape"],
  } as Record<string, string[]>,
  about: [
    "I'm a full-stack developer with two years of experience building web applications, mostly REST APIs in .NET paired with React front ends.",
    "Away from work, I build mobile apps for fun. It keeps me working across the whole stack, from the API and database to the screen in your hand.",
  ],
};
