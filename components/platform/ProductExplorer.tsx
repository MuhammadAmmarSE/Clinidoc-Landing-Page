"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { explorerFrames, type ExplorerTabKey } from "@/lib/demo-data";
import { cn } from "@/lib/cn";

const tabOrder: ExplorerTabKey[] = ["patient", "careteam", "clinical", "operations", "security"];

export function ProductExplorer() {
  const [active, setActive] = useState<ExplorerTabKey>("patient");
  const frame = explorerFrames[active];

  return (
    <Reveal
      id="solutions"
      className="bg-[radial-gradient(900px_460px_at_92%_108%,var(--color-teal-tint)_0%,transparent_55%)] bg-paper py-14 sm:py-20"
    >
      <div className="mx-auto max-w-content px-5 sm:px-12">
        <div className="mx-auto mb-8 max-w-xl text-center sm:mb-10">
          <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.11em] text-blue-700">
            Explore CliniDoc
          </p>
          <h2 className="mt-4 text-balance font-display text-[1.7rem] font-bold leading-tight sm:text-[2.1rem]">
            The same platform, from every seat.
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-[1rem] text-ink-soft">
            One product frame. Five perspectives on the same connected record.
          </p>
        </div>

        <div className="mx-auto max-w-3xl overflow-hidden rounded-[18px] border border-line bg-surface shadow-card-lg">
          <div
            role="tablist"
            aria-label="Explore CliniDoc by role"
            className="flex overflow-x-auto border-b border-line bg-surface-3"
          >
            {tabOrder.map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={active === key}
                onClick={() => setActive(key)}
                className={cn(
                  "flex-1 whitespace-nowrap border-b-[2.5px] px-2 py-[0.85rem] text-[0.85rem] font-semibold transition-colors",
                  active === key
                    ? "border-blue bg-surface text-blue-700"
                    : "border-transparent text-ink-faint",
                )}
              >
                {explorerFrames[key].tabLabel}
              </button>
            ))}
          </div>

          <div className="min-h-[280px] p-6 sm:p-8">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.05em] text-ink-faint">
              {frame.frameTitle}
            </p>
            <p className="mt-1.5 font-display text-[1.05rem] font-bold">{frame.frameName}</p>
            <div className="mt-5 max-w-md">
              {frame.rows.map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between border-b border-line py-2.5 text-[0.88rem] text-ink-soft last:border-b-0"
                >
                  <span>{row.label}</span>
                  <span className="flex items-center gap-1.5 font-semibold text-ink">
                    {row.value.startsWith("● ") ? (
                      <>
                        <span
                          className="h-2 w-2 flex-shrink-0 rounded-full bg-success"
                          aria-hidden="true"
                        />
                        {row.value.slice(2)}
                      </>
                    ) : (
                      row.value
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
