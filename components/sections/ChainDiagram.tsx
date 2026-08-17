import { cn } from "@/lib/cn";

type Emphasis = "ends" | "middle" | "last" | "none";

export function ChainDiagram({
  nodes,
  emphasis = "none",
}: {
  nodes: readonly string[];
  emphasis?: Emphasis;
}) {
  const isHighlighted = (index: number) => {
    if (emphasis === "ends") return index === 0 || index === nodes.length - 1;
    if (emphasis === "middle") return index > 0 && index < nodes.length - 1;
    if (emphasis === "last") return index === nodes.length - 1;
    return false;
  };

  return (
    <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-1.5">
      {nodes.map((node, index) => (
        <div key={node} className="flex items-center gap-1.5">
          <span
            className={cn(
              "rounded-full border px-3.5 py-2 font-mono text-[0.8rem]",
              isHighlighted(index)
                ? "border-teal-600 bg-teal-tint font-semibold text-teal-600"
                : "border-line bg-surface text-ink-faint",
            )}
          >
            {node}
          </span>
          {index < nodes.length - 1 && (
            <span className="text-[0.85rem] text-line-strong" aria-hidden="true">
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
