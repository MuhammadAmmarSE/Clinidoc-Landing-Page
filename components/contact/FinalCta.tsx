"use client";

import { useState } from "react";
import { ContactForm } from "./ContactForm";

function scrollToHash(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function FinalCta() {
  const [contactOpen, setContactOpen] = useState(false);

  function openContact() {
    setContactOpen(true);
    requestAnimationFrame(() => {
      document.getElementById("contact-card")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }

  return (
    <section
      id="cta"
      className="bg-gradient-to-br from-navy to-teal-600 py-16 text-center sm:py-24"
    >
      <div className="mx-auto max-w-content px-5 sm:px-12">
        <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.11em] text-white/75">
          Ready to connect care?
        </p>
        <h2 className="mt-4 text-balance font-display text-[2rem] font-bold text-white sm:text-[2.6rem]">
          Build a clearer clinical experience.
        </h2>
        <p className="mx-auto mt-4 max-w-[48ch] text-white/80">
          See how CliniDoc can fit your patients, care teams and clinical workflows.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            onClick={openContact}
            className="rounded-[10px] bg-white px-6 py-3 text-[0.92rem] font-bold text-navy"
          >
            Talk to the CliniDoc Team
          </button>
          <button
            onClick={() => scrollToHash("#platform")}
            className="rounded-[10px] border-[1.5px] border-white/45 px-5 py-[0.7rem] text-[0.92rem] font-semibold text-white"
          >
            Explore the Platform
          </button>
        </div>

        <ContactForm open={contactOpen} />
      </div>
    </section>
  );
}
