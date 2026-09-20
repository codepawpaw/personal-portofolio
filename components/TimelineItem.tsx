import type { ExperienceEntry } from "@/data/experience";
import { SkillBadge } from "./SkillBadge";

export function TimelineItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="relative border-l border-border pl-8 pb-12 last:pb-0">
      <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-accent" />
      <p className="font-mono text-sm text-accent">{entry.period}</p>
      <h3 className="mt-1 text-xl font-semibold">{entry.role}</h3>
      <p className="text-muted">{entry.company}</p>

      <ul className="mt-4 space-y-2 text-sm text-foreground/90">
        {entry.achievements.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-accent">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {entry.tech.map((tech) => (
          <SkillBadge key={tech} label={tech} />
        ))}
      </div>
    </div>
  );
}
