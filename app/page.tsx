import { SiteNav } from "@/components/nav/SiteNav";
import { Hero } from "@/components/hero/Hero";
import { ProofStrip } from "@/components/platform/ProofStrip";
import { Problem } from "@/components/platform/Problem";
import { PlatformReveal } from "@/components/platform/PlatformReveal";
import { ProductExplorer } from "@/components/platform/ProductExplorer";
import { CapabilitySection } from "@/components/sections/CapabilitySection";
import { WhyClinidoc } from "@/components/sections/WhyClinidoc";
import { Convergence } from "@/components/convergence/Convergence";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { FinalCta } from "@/components/contact/FinalCta";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { capabilitySections } from "@/lib/demo-data";
import { buildStructuredData } from "@/lib/structured-data";

export default function HomePage() {
  const structuredData = buildStructuredData("https://www.clinidoc.example");

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteNav />
      <main id="main">
        <Hero />
        <ProofStrip />
        <Problem />
        <PlatformReveal />
        <ProductExplorer />
        {capabilitySections.map((section) => (
          <CapabilitySection key={section.id} section={section} />
        ))}
        <WhyClinidoc />
        <Convergence />
        <FAQAccordion />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
