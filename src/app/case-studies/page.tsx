import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { CaseStudies as CaseStudiesSection } from "@/components/sections/CaseStudies";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Case Studies - Enlauncher",
  description:
    "Digital products, platforms and systems we designed and built for businesses.",
};

export default function CaseStudiesPage() {
  return (
    <PageShell
      eyebrow="case studies"
      title={
        <>
          Digital solutions we <br className="hidden md:block" />
          designed and built
        </>
      }
      subtitle="A look at the platforms, systems and products we have designed and built to solve real business problems."
    >
      <CaseStudiesSection showHeader={false} />
      <CTA />
    </PageShell>
  );
}
