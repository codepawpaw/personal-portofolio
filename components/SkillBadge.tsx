export function SkillBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border px-3 py-1 text-xs font-mono text-muted">
      {label}
    </span>
  );
}
