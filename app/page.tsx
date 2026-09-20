import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillBadge } from "@/components/SkillBadge";
import { skills } from "@/data/skills";
import { portfolio } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const featured = portfolio.slice(0, 3);

  return (
    <div>
      <Hero />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading eyebrow="Toolbox" title="Skills & Technologies" />
        <div className="space-y-6">
          {skills.map((group) => (
            <div key={group.group}>
              <p className="mb-3 font-mono text-sm text-muted">{group.group}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillBadge key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Projects"
          description="A few highlights from over a decade of building high-concurrency systems, payment platforms, and realtime products."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/portfolio"
            className="font-mono text-sm text-accent hover:underline"
          >
            View all projects →
          </Link>
        </div>
      </section>
    </div>
  );
}
