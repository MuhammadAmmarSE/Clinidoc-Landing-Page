import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";
import { ChainDiagram } from "./ChainDiagram";
import type { capabilitySections } from "@/lib/demo-data";

type Section = (typeof capabilitySections)[number];

const tintClasses: Record<Section["tint"], string> = {
  a: "bg-[radial-gradient(900px_460px_at_8%_-8%,var(--color-blue-tint)_0%,transparent_55%)] bg-paper",
  b: "bg-[radial-gradient(900px_460px_at_92%_108%,var(--color-teal-tint)_0%,transparent_55%)] bg-paper",
  surface: "bg-surface border-y border-line",
};

function emphasisFor(section: Section): "ends" | "middle" | "last" | "none" {
  if ("highlightEnds" in section && section.highlightEnds) return "ends";
  if ("highlightMiddle" in section && section.highlightMiddle) return "middle";
  if ("highlightLast" in section && section.highlightLast) return "last";
  return "none";
}

export function CapabilitySection({ section }: { section: Section }) {
  return (
    <Reveal id={section.id} className={cn("py-14 sm:py-20", tintClasses[section.tint])}>
      <div className="mx-auto max-w-content px-5 sm:px-12">
        <div className="mx-auto mb-8 max-w-xl text-center sm:mb-10">
          <p className="flex items-center justify-center gap-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.11em] text-blue-700">
            {section.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-display text-[1.7rem] font-bold leading-tight tracking-tight sm:text-[2.1rem]">
            {section.headline}
          </h2>
          {"supporting" in section && section.supporting && (
            <p className="mx-auto mt-4 max-w-[52ch] text-[1rem] text-ink-soft">
              {section.supporting}
            </p>
          )}
        </div>
        <ChainDiagram nodes={section.chain} emphasis={emphasisFor(section)} />
      </div>
    </Reveal>
  );
}
