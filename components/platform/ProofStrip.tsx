const items = [
  "Patient",
  "Care Team",
  "Clinical Programs",
  "Assessments",
  "Scheduling",
  "Documentation",
  "Security",
];

export function ProofStrip() {
  return (
    <div className="border-y border-line bg-surface py-6 sm:py-8">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-center gap-x-9 gap-y-3 px-5 sm:px-12">
        <span className="font-mono text-[0.66rem] uppercase tracking-[0.08em] text-ink-faint">
          One platform
        </span>
        {items.map((item) => (
          <span key={item} className="text-[0.86rem] font-semibold text-ink-soft">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
