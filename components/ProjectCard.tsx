import type { PortfolioProject } from "@/data/portfolio";
import { SkillBadge } from "./SkillBadge";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/60">
      <p className="font-mono text-xs text-accent">{project.company}</p>
      <h3 className="mt-1 text-lg font-semibold">{project.title}</h3>
      <p className="mt-3 text-sm text-muted">{project.description}</p>

      <ul className="mt-4 space-y-1.5 text-sm">
        {project.achievements.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-accent">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2 pt-2">
        {project.tech.map((tech) => (
          <SkillBadge key={tech} label={tech} />
        ))}
      </div>
    </div>
  );
}
