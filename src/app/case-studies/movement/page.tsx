import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { CaseStudyDetail } from "@/components/CaseStudyDetail";

export const metadata: Metadata = {
  title: "Movement - Enlauncher Case Study",
};

export default function Page() {
  return (
    <PageShell eyebrow="case study" title="Movement">
      <CaseStudyDetail slug="movement" />
    </PageShell>
  );
}
