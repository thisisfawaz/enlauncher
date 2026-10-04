import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { CaseStudyDetail } from "@/components/CaseStudyDetail";

export const metadata: Metadata = {
  title: "Horizons - Enlauncher Case Study",
};

export default function Page() {
  return (
    <PageShell eyebrow="case study" title="Horizons">
      <CaseStudyDetail slug="horizons" />
    </PageShell>
  );
}
