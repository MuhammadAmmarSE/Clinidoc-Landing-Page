"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { faqItems } from "@/lib/demo-data";
import { cn } from "@/lib/cn";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Reveal id="faq" className="bg-[radial-gradient(900px_460px_at_8%_-8%,var(--color-blue-tint)_0%,transparent_55%)] bg-paper py-14 sm:py-20">
      <div className="mx-auto max-w-narrow px-5 sm:px-12">
        <div className="mb-8 text-center sm:mb-10">
          <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.11em] text-blue-700">
            Questions
          </p>
          <h2 className="mt-4 font-display text-[1.7rem] font-bold sm:text-[2.1rem]">
            Frequently asked
          </h2>
        </div>

        <div>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border-b border-line">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-[1.1rem] text-left font-display text-[0.95rem] font-semibold"
                >
                  {item.question}
                  <span
                    className={cn(
                      "font-mono text-[1.1rem] text-ink-faint transition-colors",
                      isOpen && "text-teal-600",
                    )}
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-[max-height] duration-300 ease-out",
                    isOpen ? "max-h-56" : "max-h-0",
                  )}
                >
                  <p className="pb-[1.1rem] text-[0.9rem] text-ink-soft">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
