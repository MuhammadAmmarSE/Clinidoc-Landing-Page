import { Reveal } from "@/components/ui/Reveal";

const capabilities = [
  "Patients",
  "Care Teams",
  "Programs",
  "Appointments",
  "Assessments",
  "Documentation",
  "Records",
  "Communication",
  "Operations",
  "Security",
];

export function WhyClinidoc() {
  return (
    <Reveal className="bg-[radial-gradient(900px_460px_at_92%_108%,var(--color-teal-tint)_0%,transparent_55%)] bg-paper py-14 sm:py-20">
      <div className="mx-auto max-w-content px-5 text-center sm:px-12">
        <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.11em] text-blue-700">
          Why CliniDoc?
        </p>
        <h2 className="mx-auto mt-4 max-w-[24ch] font-display text-[1.7rem] font-bold leading-snug sm:text-[2rem]">
          One patient. One connected journey. One clinical foundation.
        </h2>
        <div className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2.5">
          {capabilities.map((cap) => (
            <span
              key={cap}
              className="rounded-full border border-line bg-surface px-3.5 py-2 font-mono text-[0.78rem] font-semibold text-ink-soft"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
