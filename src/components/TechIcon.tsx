import type { IconType } from "react-icons";
import {
  SiAndroid,
  SiClaudecode,
  SiDocker,
  SiDotnet,
  SiExpo,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRemix,
  SiSnowflake,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import {
  TbBrandCSharp,
  TbBrandVisualStudio,
  TbDatabase,
  TbDatabaseExport,
  TbHierarchy,
  TbRepeat,
} from "react-icons/tb";
import { VscAzureDevops, VscDatabase, VscVscode } from "react-icons/vsc";

// Add a tech here and it gets an icon everywhere (keys are lowercase).
const icons: Record<string, IconType> = {
  ".net": SiDotnet,
  "c#": TbBrandCSharp,
  agile: TbRepeat,
  android: SiAndroid,
  "azure devops": VscAzureDevops,
  "claude code": SiClaudecode,
  docker: SiDocker,
  "entity framework core": TbHierarchy,
  "expo go": SiExpo,
  prisma: SiPrisma,
  remix: SiRemix,
  snowflake: SiSnowflake,
  "sql server": TbDatabase,
  ssms: VscDatabase,
  "visual studio": TbBrandVisualStudio,
  "visual studio code": VscVscode,
  wherescape: TbDatabaseExport,
  expo: SiExpo,
  express: SiExpress,
  figma: SiFigma,
  firebase: SiFirebase,
  git: SiGit,
  github: SiGithub,
  javascript: SiJavascript,
  mongodb: SiMongodb,
  mysql: SiMysql,
  "next.js": SiNextdotjs,
  nextjs: SiNextdotjs,
  "node.js": SiNodedotjs,
  nodejs: SiNodedotjs,
  postgresql: SiPostgresql,
  python: SiPython,
  react: SiReact,
  "react native": SiReact,
  supabase: SiSupabase,
  tailwind: SiTailwindcss,
  tailwindcss: SiTailwindcss,
  typescript: SiTypescript,
  vercel: SiVercel,
};

export function TechChip({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name.toLowerCase()];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-md border border-line bg-chip px-3 py-1.5 font-mono text-xs text-chip-fg transition-colors hover:border-accent ${className}`}
    >
      {Icon && <Icon aria-hidden className="size-4 shrink-0" />}
      {name}
    </span>
  );
}
