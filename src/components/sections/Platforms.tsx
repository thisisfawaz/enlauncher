"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PLATFORMS } from "@/lib/data";

function PlatformIcon({
  platform,
  index,
}: {
  platform: (typeof PLATFORMS)[number];
  index: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={platform.href}
      target="_blank"
      rel="noopener"
      initial={reduce ? false : { opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay: (index % 8) * 0.04 }}
      className="group relative flex h-[90px] w-[90px] items-center justify-center"
    >
      {/* Tooltip */}
      <div className="pointer-events-none absolute -top-10 left-1/2 flex -translate-x-1/2 -rotate-[26deg] flex-col items-center opacity-0 transition-all duration-300 group-hover:-top-[42px] group-hover:rotate-0 group-hover:opacity-100">
        <span className="whitespace-nowrap rounded-full bg-lime px-3.5 py-1.5 text-[12px] font-medium tracking-tight text-black">
          {platform.name}
        </span>
        <svg width="16" height="8" viewBox="0 0 16 8" className="text-lime">
          <path d="M0 0L16 0L8 8Z" fill="currentColor" />
        </svg>
      </div>

      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-xl border border-white/5 bg-white/5 backdrop-blur-[10px] transition-transform duration-300 group-hover:scale-110">
        <Image
          src={platform.logo}
          alt={`${platform.name} Logo`}
          width={36}
          height={36}
          className="h-9 w-9 object-contain"
        />
      </div>
    </motion.a>
  );
}

export function Platforms() {
  return (
    <section className="relative flex w-full justify-center overflow-hidden py-[86px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[68px] px-5 lg:px-6">
        <div className="flex w-full max-w-[650px] flex-col items-center gap-[22px]">
          <SectionLabel>integrations</SectionLabel>
          <h2 className="text-display text-center text-[38px] text-white md:text-[45px] lg:text-[56px]">
            Every digital platform we actively support
          </h2>
        </div>

        <div className="flex w-full max-w-[900px] flex-wrap items-center justify-center gap-5">
          {PLATFORMS.map((platform, i) => (
            <PlatformIcon key={platform.name} platform={platform} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
