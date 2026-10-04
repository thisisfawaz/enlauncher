import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";

export const metadata: Metadata = {
  title: "About us - Enlauncher",
  description:
    "Meet Enlauncher, a digital solutions company that turns business needs, opportunities and ideas into practical digital products and systems.",
};

const TEAM = [
  {
    name: "Zain Malik",
    role: "Founder & Digital Solutions Architect",
    image: "https://framerusercontent.com/images/dslZt14iz85efdXaSF1uG8T3JG0.png?width=900&height=1200",
  },
  {
    name: "Aaron Brooks",
    role: "Head of Product Strategy",
    image: "https://framerusercontent.com/images/GvdwqqWKp7sJHdXGB3rkyE4LCk.png?width=1200&height=1200",
  },
  {
    name: "Marcus Chen",
    role: "Lead Engineer",
    image: "https://framerusercontent.com/images/efdh5k2mU3IJX4ILTny2nwPwNHg.png?width=900&height=1200",
  },
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="about us"
      title="We turn business needs into digital systems"
      subtitle="Enlauncher is a digital solutions company. We understand what a business needs, determine the right digital solution, then design and build it — from platforms and systems to websites."
    >
      <section id="team" className="relative flex w-full justify-center px-5 py-16 lg:px-6">
        <div className="grid w-full max-w-[1200px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-[10px]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-1 p-6">
                <p
                  className="text-[24px] leading-[1.125em] tracking-[-0.02em] text-white"
                  style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}
                >
                  {member.name}
                </p>
                <p className="text-sm font-medium tracking-tight text-white/60">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Stats />
      <WhyChooseUs />
      <Process />
    </PageShell>
  );
}
