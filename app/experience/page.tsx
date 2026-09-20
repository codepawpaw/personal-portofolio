import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { TimelineItem } from "@/components/TimelineItem";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience — Jonathan Natanael Siahaan",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        eyebrow="Career"
        title="Work Experience"
        description="A decade-plus building software across CRM, messaging, fintech, and streaming platforms."
      />
      <div>
        {experience.map((entry) => (
          <TimelineItem key={`${entry.company}-${entry.period}`} entry={entry} />
        ))}
      </div>
    </div>
  );
}
