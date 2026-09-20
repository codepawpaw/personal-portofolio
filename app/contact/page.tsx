import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact — Jonathan Natanael Siahaan",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        eyebrow="Get in touch"
        title="Contact"
        description="Open to interesting problems, consulting engagements, and conversations about building resilient software."
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <a
          href={profile.cvPath}
          download
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Download CV
        </a>
      </div>

      <dl className="mt-12 space-y-6 border-t border-border pt-8">
        <div>
          <dt className="font-mono text-sm text-muted">Email</dt>
          <dd className="mt-1">
            <a href={`mailto:${profile.email}`} className="text-lg hover:text-accent">
              {profile.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-mono text-sm text-muted">Phone</dt>
          <dd className="mt-1">
            <a href={`tel:${profile.phone.replace(/\s|-/g, "")}`} className="text-lg hover:text-accent">
              {profile.phone}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-mono text-sm text-muted">Location</dt>
          <dd className="mt-1 text-lg">{profile.location}</dd>
        </div>
      </dl>
    </div>
  );
}
