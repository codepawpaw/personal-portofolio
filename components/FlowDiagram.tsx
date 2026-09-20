"use client";

import { useState } from "react";
import type { FlowBranch, FlowNode } from "@/data/proposalPlans";
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

function FlowBox({ label, detail, onClick }: FlowNode & { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full flex-col rounded-xl border border-accent/30 bg-background/60 p-3 text-center shadow-[0_0_20px_-8px_var(--accent)] transition-colors hover:border-accent md:w-36 lg:w-40"
    >
      <span className="text-[0.95em] font-semibold text-white">{label}</span>
      <span className="mt-1 text-[0.75em] text-white/70">{detail}</span>
    </button>
  );
}

export function FlowDiagram({ nodes, branches }: { nodes: FlowNode[]; branches: FlowBranch[] }) {
  const [selected, setSelected] = useState<Selected | null>(null);

  function openNode(node: FlowNode) {
    setSelected({ label: node.label, description: node.description });
  }

  function openBranch(branch: FlowBranch) {
    if (!branch.description) return;
    setSelected({ label: branch.label, description: branch.description });
  }

  return (
    <div className="rounded-2xl border border-border bg-surface/60 p-4 sm:p-6">
      <div className="flex flex-col items-stretch gap-3 md:flex-row md:flex-wrap md:items-center md:justify-center">
        {nodes.map((node, i) => (
          <div key={node.label} className="flex flex-col items-center gap-3 md:flex-row">
            <FlowBox {...node} onClick={() => openNode(node)} />
            {i < nodes.length - 1 && <ArrowIcon />}
          </div>
        ))}
      </div>

      {branches.length > 0 && (
        <div className="mt-6 border-t border-dashed border-border pt-6">
          <p className="mb-3 text-[0.75em] font-mono uppercase tracking-wide text-white/50">
            Supporting connections
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            {branches.map((branch) => (
              <button
                key={branch.label}
                type="button"
                onClick={() => openBranch(branch)}
                disabled={!branch.description}
                className="flex flex-1 items-center gap-3 rounded-xl border border-dashed border-accent/30 bg-background/40 p-3 text-left transition-colors enabled:hover:border-accent disabled:cursor-default"
              >
                <div className="flex flex-1 flex-col">
                  <span className="text-[0.9em] font-semibold text-white">{branch.label}</span>
                  <span className="text-[0.75em] text-white/70">{branch.detail}</span>
                </div>
                <ArrowIcon />
                <span className="text-[0.8em] text-accent">{branch.connectsTo}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <DetailModal selected={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
