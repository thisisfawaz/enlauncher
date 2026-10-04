import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact - Enlauncher",
  description:
    "Tell Enlauncher about your business need and we will determine the right digital solution.",
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="contact"
      title="Tell us what you need to build"
      subtitle="Describe the problem or idea. We will investigate it and come back with the right digital solution and next steps."
    >
      <ContactForm />
    </PageShell>
  );
}
