"use client";

import { useState } from "react";
import { proposalPlans } from "@/data/proposalPlans";
import { FlowDiagram } from "@/components/FlowDiagram";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";

const PASSWORD = "123456";

const MIN_FONT_SIZE = 14;
const MAX_FONT_SIZE = 28;
const DEFAULT_FONT_SIZE = 14;
const FONT_STEP = 2;

export default function ProposalPlansPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input === PASSWORD) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (!unlocked) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-sm flex-col justify-center px-6 py-16 text-white">
        <p className="mb-2 text-[1em] font-mono uppercase tracking-wide">Restricted</p>
        <h1 className="text-[2em] font-semibold tracking-tight text-accent">Proposal Plans</h1>
        <p className="mt-3 text-[1.1em]">Enter the password to view this page.</p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
          <input
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            placeholder="Password"
            autoFocus
            className="rounded-xl border border-border bg-surface px-4 py-2.5 text-[1em] text-white outline-none placeholder:text-white/50 focus:border-accent/60"
          />
          {error && <p className="text-[1em] text-red-400">Incorrect password.</p>}
          <button
            type="submit"
            className="rounded-xl bg-accent px-4 py-2.5 text-[1em] font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Unlock
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 text-white" style={{ fontSize: `${fontSize}px` }}>
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-[0.9em] font-mono uppercase tracking-wide">Internal</p>
          <h1 className="text-[2em] font-semibold tracking-tight text-accent sm:text-[2.2em]">Proposal Plans</h1>
          <p className="mt-4 max-w-2xl text-[1.1em]">Architecture proposals and research write-ups.</p>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2">
          <span className="text-[0.85em] font-mono uppercase tracking-wide">Text size</span>
          <button
            type="button"
            onClick={() => setFontSize((s) => Math.max(MIN_FONT_SIZE, s - FONT_STEP))}
            disabled={fontSize <= MIN_FONT_SIZE}
            aria-label="Decrease text size"
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-border text-[1em] disabled:opacity-30"
          >
            A−
          </button>
          <button
            type="button"
            onClick={() => setFontSize(DEFAULT_FONT_SIZE)}
            aria-label="Reset text size"
            className="flex h-7 items-center justify-center rounded-lg border border-border px-2 text-[0.8em]"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => setFontSize((s) => Math.min(MAX_FONT_SIZE, s + FONT_STEP))}
            disabled={fontSize >= MAX_FONT_SIZE}
            aria-label="Increase text size"
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-border text-[1em] disabled:opacity-30"
          >
            A+
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {proposalPlans.map((plan) => {
          const isOpen = openSlug === plan.slug;
          return (
            <div key={plan.slug} className="rounded-2xl border border-border bg-surface p-6">
              <button
                onClick={() => setOpenSlug(isOpen ? null : plan.slug)}
                className="flex w-full items-center justify-between text-left"
              >
                <h2 className="text-[1.3em] font-semibold">{plan.title}</h2>
                <span className="text-[1.3em]">{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <div className="mt-6 space-y-8">
                  <div>
                    <h3 className="mb-3 text-[0.85em] font-mono font-bold uppercase tracking-wide text-accent">
                      Network Comparison: Polygon PoS vs. Solana
                    </h3>
                    <div className="overflow-x-auto rounded-xl border border-border">
                      <table className="w-full border-collapse text-left text-[1em]">
                        <thead>
                          <tr className="border-b border-border bg-background/40">
                            <th className="p-3 font-medium">Criterion</th>
                            <th className="p-3 font-medium">Polygon PoS</th>
                            <th className="p-3 font-medium">Solana</th>
                          </tr>
                        </thead>
                        <tbody>
                          {plan.comparison.map((row) => (
                            <tr key={row.criterion} className="border-b border-border last:border-0">
                              <td className="p-3 align-top font-medium">{row.criterion}</td>
                              <td className="p-3 align-top">{row.polygon}</td>
                              <td className="p-3 align-top">{row.solana}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-[0.85em] font-mono font-bold uppercase tracking-wide text-accent">Recommendation</h3>
                    <p className="text-[1em]">{plan.recommendation}</p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-[0.85em] font-mono font-bold uppercase tracking-wide text-accent">Ethereum Architecture</h3>
                    <p className="mb-4 text-[1em]">{plan.ethereumSimple}</p>
                    <p className="mb-4 text-[0.9em] text-white/60">Click any concept for details.</p>
                    <ArchitectureDiagram groups={plan.ethereumArchitectureDiagram} />
                  </div>

                  <div>
                    <h3 className="mb-3 text-[0.85em] font-mono font-bold uppercase tracking-wide text-accent">Solana Architecture</h3>
                    <p className="mb-4 text-[1em]">{plan.solanaSimple}</p>
                    <p className="mb-4 text-[0.9em] text-white/60">Click any concept for details.</p>
                    <ArchitectureDiagram groups={plan.solanaArchitectureDiagram} />
                  </div>

                  <div>
                    <h3 className="mb-3 text-[0.85em] font-mono font-bold uppercase tracking-wide text-accent">
                      High-Level System Communication Flow
                    </h3>
                    <p className="mb-4 text-[0.9em] text-white/60">Click any step for details.</p>
                    <FlowDiagram nodes={plan.flowDiagram} branches={plan.flowBranches} />
                    <p className="mt-6 text-[1em] text-white/85">{plan.closing}</p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-[0.85em] font-mono font-bold uppercase tracking-wide text-accent">Sources</h3>
                    <ul className="space-y-1.5 text-[1em]">
                      {plan.sources.map((source) => (
                        <li key={source.url}>
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white underline underline-offset-2 hover:opacity-80"
                          >
                            {source.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
