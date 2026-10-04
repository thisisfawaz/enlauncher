"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/Icons";
import { PRICING } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const plan = PRICING[active];

  return (
    <section id="pricing" className="relative flex w-full justify-center overflow-hidden py-[86px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[68px] px-5 lg:px-6">
        <div className="flex w-full max-w-[650px] flex-col items-center gap-[22px]">
          <SectionLabel>Pricing Plans</SectionLabel>
          <h2 className="text-display text-center text-[38px] text-white md:text-[45px] lg:text-[56px]">
            Engagements that match how you build
          </h2>
        </div>

        <div className="flex w-full max-w-[1000px] flex-col gap-3.5 lg:flex-row">
          {/* Tabs */}
          <div className="flex w-full max-w-[275px] flex-col justify-between gap-3">
            {PRICING.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActive(i)}
                className={cn(
                  "group relative flex cursor-pointer flex-col justify-center gap-4 overflow-hidden rounded-xl border border-white/5 p-5 text-left backdrop-blur-[10px] transition-colors",
                  i === active
                    ? "bg-[linear-gradient(135deg,#0a6631_0%,#bff747_100%)]"
                    : "bg-white/5"
                )}
              >
                {/* Same gradient, softer, on hover for inactive tabs */}
                {i !== active && (
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#0a6631_0%,#bff747_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
                )}
                <AnimatePresence>
                  {i === active && (
                    <motion.div
                      initial={{ opacity: 0, scale: 1.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="pointer-events-none absolute inset-0 backdrop-blur-[35px]"
                    />
                  )}
                </AnimatePresence>
                <div className="relative z-10 flex items-center gap-2.5">
                  <span className="text-xs font-medium tracking-tight text-white/60">
                    {p.number}
                  </span>
                </div>
                <div className="relative z-10 flex flex-col gap-1">
                  <p className="text-xl leading-[1.125em] tracking-[-0.02em] text-white" style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}>
                    {p.name}
                  </p>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium tracking-tight text-white">
                      {p.price}
                    </span>
                    <span className="text-sm font-medium tracking-tight text-white/60">
                      / month
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="relative flex flex-1 flex-col justify-between gap-10 rounded-[18px] border border-white/5 bg-white/5 p-8 pt-9 backdrop-blur-[5px]">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1.5">
                <h5 className="text-[36px] leading-[1.125em] tracking-[-0.02em] text-white" style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}>
                  {plan.name}
                </h5>
                <p className="text-[15px] font-medium leading-[1.6em] tracking-[-0.03em] text-white/60">
                  {plan.tagline}
                </p>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.02em] text-white">
                {plan.tag}
              </span>
            </div>

            <div className="flex items-end gap-2">
              <h2 className="text-[38px] leading-[1.125em] tracking-[-0.04em] text-white md:text-[45px]" style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}>
                {plan.price}
              </h2>
              <span className="pb-1.5 text-[15px] font-medium tracking-[-0.03em] text-white/60">
                / month
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={plan.name}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-7"
              >
                <div className="grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckIcon size={24} className="shrink-0 text-white" />
                      <span className="text-[15px] font-medium leading-[1.6em] tracking-[-0.03em] text-white/60">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 items-center gap-2.5 sm:grid-cols-2">
                  <Button href="/contact" variant="green" className="w-full">
                    Start a conversation
                  </Button>
                  <p className="text-[15px] font-medium leading-[1.6em] tracking-[-0.03em] text-white/60">
                    No contracts · Cancel anytime
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[18px] opacity-[0.15]"
              style={{ filter: "blur(60px)" }}
            >
              <Image
                src="https://framerusercontent.com/images/kRmGmFg3ZaGrlOZOPRjkMJttg.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
