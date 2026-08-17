import { footerColumns } from "@/lib/demo-data";
import { BrandMark } from "@/components/nav/BrandMark";

export function SiteFooter() {
  return (
    <footer className="bg-navy py-12 text-white/85 sm:py-14">
      <div className="mx-auto max-w-content px-5 sm:px-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-white">
              <BrandMark variant="white" className="h-6 w-6" />
              CliniDoc
            </div>
            <p className="mt-2.5 max-w-[26ch] text-[0.85rem] text-white/65">
              Clinical care, connected.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="mb-2.5 font-mono text-[0.68rem] uppercase tracking-[0.06em] text-white/55">
                {col.title}
              </p>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block py-[0.28rem] text-[0.86rem] text-white/80 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-between gap-2 border-t border-white/15 pt-5 font-mono text-[0.74rem] text-white/55">
          <span>© 2026 CliniDoc</span>
          <span>
            <span className="cursor-default text-white/40">Privacy</span>
            {" · "}
            <span className="cursor-default text-white/40">Terms</span>
            {" · "}
            <span className="cursor-default text-white/40">Security</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
