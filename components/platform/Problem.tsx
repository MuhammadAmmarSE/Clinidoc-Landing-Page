import { Reveal } from "@/components/ui/Reveal";

const fragmentedSystems = [
  "Referral system",
  "Scheduling system",
  "Assessment system",
  "Documentation system",
  "Messaging system",
  "Record system",
];

export function Problem() {
  return (
    <Reveal className="bg-[radial-gradient(900px_460px_at_8%_-8%,var(--color-blue-tint)_0%,transparent_55%)] bg-paper py-14 sm:py-20">
      <div className="mx-auto max-w-content px-5 sm:px-12">
        <div className="mx-auto mb-8 max-w-xl text-center">
          <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.11em] text-blue-700">
            The Problem
          </p>
          <h2 className="mt-4 text-balance font-display text-[1.7rem] font-bold leading-tight sm:text-[2.1rem]">
            Healthcare workflows don&rsquo;t happen in one place.
          </h2>
        </div>

        <div className="mx-auto mb-8 flex max-w-xl flex-wrap justify-center gap-2.5">
          {fragmentedSystems.map((system) => (
            <span
              key={system}
              className="rounded-full border border-line bg-surface px-3 py-[0.4rem] font-mono text-[0.74rem] text-ink-faint before:mr-1.5 before:text-danger before:content-['●']"
            >
              {system}
            </span>
          ))}
        </div>

        <div className="mx-auto max-w-md text-center">
          <span className="inline-block rounded-[10px] bg-navy px-5 py-[0.55rem] font-display font-bold text-white">
            CliniDoc
          </span>
          <div className="mt-2 text-[0.76rem] font-mono text-ink-faint" aria-hidden="true">
            ↓
          </div>
          <div className="mt-2 flex flex-wrap justify-center gap-2.5">
            {["Referral", "Assessment", "Record"].map((node) => (
              <span
                key={node}
                className="rounded-full border border-line bg-surface-3 px-3 py-[0.4rem] font-mono text-[0.76rem] font-semibold text-ink-soft"
              >
                {node}
              </span>
            ))}
          </div>
          <div className="mt-2 text-[0.76rem] font-mono text-ink-faint" aria-hidden="true">
            ↓
          </div>
          <span className="mt-2 inline-block rounded-[10px] bg-teal px-5 py-[0.55rem] font-display font-bold text-white">
            Patient
          </span>
        </div>
      </div>
    </Reveal>
  );
}
