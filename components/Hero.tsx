import Link from "next/link";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16 pt-20 sm:pt-28">
      <p className="font-mono text-sm text-accent">Hi, I&apos;m</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-4 text-xl text-muted">{profile.title}</p>
      <p className="mt-6 max-w-2xl text-foreground/90">{profile.summary}</p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/portfolio"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          View Portfolio
        </Link>
        <a
          href={profile.cvPath}
          download
          className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Download CV
        </a>
      </div>

      <dl className="mt-16 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
        {profile.highlights.map((item) => (
          <div key={item.label}>
            <dt className="text-sm text-muted">{item.label}</dt>
            <dd className="mt-1 text-2xl font-semibold text-accent">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
