import { Reveal } from "@/components/ui/Reveal";

export function PlatformReveal() {
  return (
    <Reveal id="platform" className="border-y border-line bg-surface py-14 sm:py-20">
      <div className="mx-auto max-w-content px-5 sm:px-12">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.11em] text-blue-700">
            The Platform
          </p>
          <h2 className="mt-4 text-balance font-display text-[1.7rem] font-bold leading-tight sm:text-[2.1rem]">
            One connected clinical experience.
          </h2>
        </div>

        <div className="mx-auto max-w-xl text-center">
          <div className="flex justify-center gap-5">
            <span className="rounded-full border-[1.5px] border-line bg-surface px-4 py-[0.6rem] font-mono text-[0.85rem] font-semibold shadow-card">
              Patient
            </span>
            <span className="rounded-full border-[1.5px] border-line bg-surface px-4 py-[0.6rem] font-mono text-[0.85rem] font-semibold shadow-card">
              Care Team
            </span>
          </div>
          <div className="my-2 text-line-strong" aria-hidden="true">
            ↓
          </div>
          <span className="inline-block rounded-xl bg-gradient-to-br from-blue to-teal px-8 py-3 font-display text-[1rem] font-bold text-white shadow-card-lg">
            Clinical Record
          </span>
          <div className="my-2 text-line-strong" aria-hidden="true">
            ↓
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["Assessment", "Appointment", "Message", "Security"].map((leaf) => (
              <span
                key={leaf}
                className="rounded-full border border-line bg-surface-3 px-3.5 py-2 font-mono text-[0.78rem] text-ink-soft"
              >
                {leaf}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
