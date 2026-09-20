"use client";

import { useState } from "react";
import type { ArchitectureGroup, FlowNode } from "@/data/proposalPlans";
import { DetailModal, type Selected } from "./DetailModal";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[1.4em] w-[1.4em] shrink-0 rotate-90 text-accent md:rotate-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function ConceptCard({ label, detail, onClick }: FlowNode & { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full flex-col rounded-xl border border-accent/30 bg-background/60 p-3 text-center shadow-[0_0_20px_-8px_var(--accent)] transition-colors hover:border-accent"
    >
      <span className="text-[0.9em] font-semibold text-white">{label}</span>
      <span className="mt-1 text-[0.72em] text-white/70">{detail}</span>
    </button>
  );
}

export function ArchitectureDiagram({ groups }: { groups: ArchitectureGroup[] }) {
  const [selected, setSelected] = useState<Selected | null>(null);

  function openNode(node: FlowNode) {
    setSelected({ label: node.label, description: node.description });
  }

  return (
    <div className="rounded-2xl border border-border bg-surface/60 p-4 sm:p-6">
      <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-stretch">
        {groups.map((group, i) => (
          <div key={group.group} className="flex flex-col items-center gap-4 md:flex-row md:items-stretch">
            <div className="flex flex-1 flex-col rounded-xl border border-dashed border-accent/30 bg-background/30 p-3">
              <p className="mb-3 text-center text-[0.75em] font-mono uppercase tracking-wide text-white/50">
                {group.group}
              </p>
              <div className="flex flex-1 flex-col gap-3 sm:flex-row md:flex-col">
                {group.nodes.map((node) => (
                  <ConceptCard key={node.label} {...node} onClick={() => openNode(node)} />
                ))}
              </div>
            </div>
            {i < groups.length - 1 && <ArrowIcon />}
          </div>
        ))}
      </div>

      <DetailModal selected={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
