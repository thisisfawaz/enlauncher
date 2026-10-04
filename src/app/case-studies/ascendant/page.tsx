import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { CaseStudyDetail } from "@/components/CaseStudyDetail";

export const metadata: Metadata = {
  title: "Ascendant - Enlauncher Case Study",
};

export default function Page() {
  return (
    <PageShell eyebrow="case study" title="Ascendant">
      <CaseStudyDetail slug="ascendant" />
    </PageShell>
  );
}
