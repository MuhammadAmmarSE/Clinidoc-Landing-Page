"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";

function scrollToHash(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const branchNodes = ["Patient", "Care Team"];
const leafNodes = ["Assessment", "Appointment", "Message"];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const nodeVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: shouldReduceMotion ? 0 : 0.35 * i, duration: 0.4 },
    }),
  };

  return (
    <header
      id="top"
      className="bg-[radial-gradient(1100px_560px_at_12%_-12%,var(--color-blue-tint)_0%,transparent_55%),radial-gradient(1100px_560px_at_90%_105%,var(--color-teal-tint)_0%,transparent_55%)] bg-paper py-16 text-center sm:py-24"
    >
      <div className="mx-auto max-w-content px-5 sm:px-12">
        <p className="flex items-center justify-center gap-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.11em] text-blue-700">
          The Connected Clinical Platform
        </p>
        <h1 className="mx-auto mt-4 max-w-[16ch] text-balance font-display text-[2.4rem] font-bold leading-[1.08] tracking-tight sm:text-[3.4rem]">
          Clinical care, connected.
        </h1>
        <p className="mx-auto mt-5 max-w-[52ch] text-[1.08rem] text-ink-soft">
          CliniDoc brings patients, care teams, assessments, appointments, documentation and
          clinical records into one connected experience.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => scrollToHash("#platform")}
            className="rounded-[10px] bg-navy px-6 py-3 text-[0.92rem] font-semibold text-white"
          >
            Explore CliniDoc
          </button>
          <button
            onClick={() => scrollToHash("#cta")}
            className="rounded-[10px] border-[1.5px] border-line-strong px-5 py-[0.7rem] text-[0.92rem] font-semibold text-ink"
          >
            Talk to our team
          </button>
        </div>

        <div className="mx-auto mt-10 max-w-lg sm:mt-14" aria-hidden="true">
          <div className="flex justify-center gap-6">
            {branchNodes.map((node, i) => (
              <motion.span
                key={node}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={nodeVariants}
                className="rounded-full border-[1.5px] border-line bg-surface px-3.5 py-2 font-mono text-[0.76rem] font-semibold text-blue-700 shadow-card"
              >
                {node}
              </motion.span>
            ))}
          </div>
          <div className="my-3 text-center">
            <motion.span
              custom={2}
              initial="hidden"
              animate="visible"
              variants={nodeVariants}
              className="inline-block rounded-xl bg-teal px-6 py-[0.65rem] font-display text-[0.95rem] font-bold text-white shadow-card"
            >
              Clinical Record
            </motion.span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {leafNodes.map((node, i) => (
              <motion.span
                key={node}
                custom={i + 3}
                initial="hidden"
                animate="visible"
                variants={nodeVariants}
                className="rounded-full border border-line bg-surface-3 px-3 py-[0.4rem] font-mono text-[0.72rem] text-ink-soft"
              >
                {node}
              </motion.span>
            ))}
          </div>
          <motion.p
            custom={6}
            initial="hidden"
            animate="visible"
            variants={nodeVariants}
            className={cn("mt-4 text-center font-display text-[0.88rem] font-semibold text-ink-faint")}
          >
            All connected.
          </motion.p>
        </div>
      </div>
    </header>
  );
}
