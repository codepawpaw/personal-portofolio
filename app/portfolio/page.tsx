import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio — Jonathan Natanael Siahaan",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        eyebrow="Selected work"
        title="Portfolio"
        description="Systems built for scale: CRM engines, realtime messaging, payment infrastructure, and more."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
