"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/demo-data";
import { cn } from "@/lib/cn";
import { BrandMark } from "./BrandMark";

function scrollToHash(href: string) {
  const target = document.querySelector(href);
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0);
      setScrolled(doc.scrollTop > 40);
    }
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick(href: string) {
    scrollToHash(href);
    setMenuOpen(false);
  }

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[200] h-[3px] bg-gradient-to-r from-blue to-teal transition-[width]"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
      <nav
        aria-label="Primary"
        className="sticky top-0 z-[100] border-b border-line bg-surface/90 backdrop-blur-md"
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-5 transition-[padding] sm:px-12",
            scrolled ? "py-2.5" : "py-4",
          )}
        >
          <button
            onClick={() => scrollToHash("#top")}
            className="flex items-center gap-2 font-display text-[1.02rem] font-bold"
            aria-label="CliniDoc home"
          >
            <BrandMark className="h-7 w-7" />
            CliniDoc
          </button>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[0.86rem] font-semibold text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick("#cta")}
            className="hidden whitespace-nowrap rounded-[9px] bg-navy px-[1.15rem] py-[0.55rem] text-[0.84rem] font-semibold text-white sm:block"
          >
            Talk to us
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line-strong md:hidden"
          >
            <span className="block h-[2px] w-4 bg-ink" aria-hidden="true" />
          </button>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-0 border-t border-line px-5 pb-4 pt-2 sm:px-12 md:hidden">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="border-b border-line py-3 text-left text-[0.92rem] font-semibold text-ink-soft last:border-b-0"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#cta")}
              className="py-3 text-left text-[0.92rem] font-semibold text-blue-700"
            >
              Talk to us
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
