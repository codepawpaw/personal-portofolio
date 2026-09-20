export type Selected = { label: string; description: string };

export function DetailModal({ selected, onClose }: { selected: Selected | null; onClose: () => void }) {
  if (!selected) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-lg rounded-2xl border border-accent/40 bg-surface p-6 shadow-[0_0_40px_-10px_var(--accent)]"
      >
        <div className="flex items-start justify-between gap-4">
          <h4 className="text-[1.2em] font-semibold text-accent">{selected.label}</h4>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-[1.2em] leading-none text-white/60 hover:text-white"
          >
            ×
          </button>
        </div>
        <p className="mt-3 text-[1em] text-white/85">{selected.description}</p>
      </div>
    </div>
  );
}
