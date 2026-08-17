"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const nodes = [
  "Referral",
  "Patient",
  "Care Team",
  "Appointment",
  "Assessment",
  "Documentation",
  "Message",
  "Security",
];

export function Convergence() {
  const [played, setPlayed] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <Reveal className="border-y border-line bg-surface py-14 sm:py-20">
      <div className="mx-auto max-w-narrow px-5 text-center sm:px-12">
        <p className="mb-4 font-mono text-[0.72rem] font-medium uppercase tracking-[0.11em] text-blue-700">
          Everything, together
        </p>

        <div className="flex min-h-[180px] flex-wrap items-center justify-center gap-2">
          {!played &&
            nodes.map((node) => (
              <span
                key={node}
                className="rounded-full border border-line bg-surface px-3 py-[0.4rem] font-mono text-[0.74rem] text-ink-faint"
              >
                {node}
              </span>
            ))}
          <AnimatePresence>
            {played && (
              <motion.div
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-display text-[1.6rem] font-bold tracking-tight"
              >
                Clinical care, connected.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          onClick={() => setPlayed(true)}
          className="mt-5 rounded-[9px] bg-teal px-[1.3rem] py-[0.6rem] text-[0.85rem] font-semibold text-white"
        >
          Play
        </button>
      </div>
    </Reveal>
  );
}
