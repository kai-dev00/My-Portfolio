import type { Project } from "@/data/portfolio";

// A project whose title is still "[Something]" is a placeholder: it can show on the
// home page, but it isn't counted in stats or listed on /projects.
export const isPlaceholder = (p: Project) => p.title.startsWith("[");
