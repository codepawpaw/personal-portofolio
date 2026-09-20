"use client";

import { useState } from "react";
import { proposalPlans } from "@/data/proposalPlans";

const PASSWORD = "123456";

export default function ProposalPlansPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [openSlug, setOpenSlug] = useState<string | null>(null);

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
      <div className="mx-auto flex min-h-[60vh] max-w-sm flex-col justify-center px-6 py-16">
        <p className="mb-2 font-mono text-sm text-accent">Restricted</p>
        <h1 className="text-2xl font-semibold tracking-tight">Proposal Plans</h1>
        <p className="mt-3 text-sm text-muted">Enter the password to view this page.</p>

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
            className="rounded-xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:border-accent/60"
          />
          {error && <p className="text-sm text-red-400">Incorrect password.</p>}
          <button
            type="submit"
            className="rounded-xl bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Unlock
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-12">
        <p className="mb-2 font-mono text-sm text-accent">Internal</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Proposal Plans</h1>
        <p className="mt-4 max-w-2xl text-muted">Architecture proposals and research write-ups.</p>
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
                <h2 className="text-lg font-semibold">{plan.title}</h2>
                <span className="text-accent">{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <div className="mt-6 space-y-8 text-sm">
                  <div>
                    <h3 className="mb-3 font-mono text-xs uppercase tracking-wide text-accent">
                      Network Comparison: Polygon PoS vs. Solana
                    </h3>
                    <div className="overflow-x-auto rounded-xl border border-border">
                      <table className="w-full border-collapse text-left">
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
                              <td className="p-3 align-top font-medium text-foreground">{row.criterion}</td>
                              <td className="p-3 align-top text-muted">{row.polygon}</td>
                              <td className="p-3 align-top text-muted">{row.solana}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 font-mono text-xs uppercase tracking-wide text-accent">Recommendation</h3>
                    <p className="text-muted">{plan.recommendation}</p>
                  </div>

                  <div>
                    <h3 className="mb-3 font-mono text-xs uppercase tracking-wide text-accent">Solana Architecture</h3>
                    <div className="space-y-3 text-muted">
                      {plan.architecture.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 font-mono text-xs uppercase tracking-wide text-accent">
                      High-Level System Communication Flow
                    </h3>
                    <div className="space-y-3 text-muted">
                      {plan.flow.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                      <p>{plan.closing}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 font-mono text-xs uppercase tracking-wide text-accent">Sources</h3>
                    <ul className="space-y-1.5">
                      {plan.sources.map((source) => (
                        <li key={source.url}>
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline"
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
