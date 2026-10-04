"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CASE_STUDIES } from "@/lib/data";
import { EyeIcon, TrendUpIcon, UserIcon, ArrowUpRightIcon } from "@/components/Icons";

const STAT_ICONS = { eye: EyeIcon, trend: TrendUpIcon, user: UserIcon };

const RESULTS = [
  { label: "Active users", value: "128K+", delta: "245%" },
  { label: "Manual work removed", value: "189%", delta: "52%" },
  { label: "Process accuracy", value: "95%", delta: "35%" },
  { label: "Avg task time", value: "42s", delta: "19%" },
];

export function CaseStudyDetail({ slug }: { slug: string }) {
  const study = CASE_STUDIES.find((s) => s.href === `/case-studies/${slug}`);
  const reduce = useReducedMotion();

  if (!study) {
    return (
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-6 px-5 py-16 text-center">
        <h2 className="text-display text-[40px] text-white">Case study not found</h2>
        <Link
          href="/case-studies"
          className="rounded-full bg-lime px-6 py-3 text-sm font-medium text-black"
        >
          Back to case studies
        </Link>
      </div>
    );
  }

  return (
    <section className="relative flex w-full justify-center px-5 pb-24 lg:px-6">
      <div className="flex w-full max-w-[1000px] flex-col gap-10">
        {/* Hero video */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10"
        >
          <video
            src={study.video}
            poster={study.poster}
            muted
            loop
            autoPlay
            playsInline
            className="h-full w-full object-cover"
          />
          <div className="absolute left-5 top-5 flex flex-wrap gap-2">
            {study.stats.map((stat, i) => {
              const Icon = STAT_ICONS[stat.icon as keyof typeof STAT_ICONS];
              return (
                <span
                  key={i}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${stat.white ? "bg-white text-black" : "bg-white/10 text-white backdrop-blur-sm"}`}
                >
                  <Icon size={15} />
                  {stat.value}
                </span>
              );
            })}
          </div>
        </motion.div>

        {/* Meta */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-panel-2 px-3 py-1 text-xs font-medium tracking-tight text-white">
              {study.category}
            </span>
            <span className="rounded-full bg-panel-2 px-3 py-1 text-xs font-medium tracking-tight text-white">
              {study.label}
            </span>
          </div>
          <h1 className="text-display text-[42px] text-white md:text-[64px]">
            {study.title}
          </h1>
          <p className="max-w-[640px] text-lg font-medium leading-[1.6em] tracking-tight text-white/60">
            {study.subtitle}. How we understood the business need, defined the
            right solution, then designed and built the system behind these
            results.
          </p>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {RESULTS.map((r, i) => (
            <motion.div
              key={r.label}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex flex-col gap-1 rounded-2xl border border-white/5 bg-white/5 p-6"
            >
              <span className="text-xs uppercase tracking-[0.02em] text-white/40">
                {r.label}
              </span>
              <span
                className="text-[32px] leading-[1.125em] tracking-[-0.02em] text-white"
                style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}
              >
                {r.value}
              </span>
              <span className="text-xs font-medium text-lime">↑{r.delta}</span>
            </motion.div>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[study.poster, study.poster].map((src, i) => (
            <div
              key={i}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={src}
                alt={`${study.title} asset ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <Link
          href="/case-studies"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium tracking-tight text-white transition-colors hover:bg-white/15"
        >
          <ArrowUpRightIcon size={16} className="rotate-180" />
          Back to all case studies
        </Link>
      </div>
    </section>
  );
}
