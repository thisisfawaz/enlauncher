"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { PROCESS_STEPS } from "@/lib/data";

function Dots({ active }: { active: number }) {
  return (
    <div className="flex items-center gap-2">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="block h-2.5 rounded-full transition-all duration-300"
          style={{
            width: i === active ? 40 : 10,
            background: i === active ? "#bff747" : "rgba(255,255,255,0.2)",
          }}
        />
      ))}
    </div>
  );
}

export function Process() {
  const reduce = useReducedMotion();

  return (
    <section id="process" className="relative flex w-full justify-center py-[86px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[68px] px-5 lg:px-6">
        <div className="flex w-full max-w-[650px] flex-col items-center gap-[22px]">
          <SectionLabel>process</SectionLabel>
          <h2 className="text-display text-center text-[38px] text-white md:text-[45px] lg:text-[56px]">
            How we take an idea to a working system
          </h2>
        </div>

        <div className="flex w-full flex-col gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={reduce ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                zIndex: i + 1,
                top: `calc(6rem + ${i * 1.5}rem)`,
              }}
              className="sticky grid w-full grid-cols-1 gap-4 rounded-[20px] border border-white/10 bg-panel p-2 shadow-[0_10px_40px_rgba(0,0,0,0.45)] lg:grid-cols-2"
            >
              {/* Text side */}
              <div className="flex flex-col justify-center gap-10 px-6 py-8 lg:px-8 lg:py-10">
                <div className="flex flex-col gap-[18px]">
                  <SectionLabel className="uppercase">{step.step}</SectionLabel>
                  <div className="flex flex-col gap-4">
                    <h4 className="text-[32px] leading-[1.125em] tracking-[-0.04em] text-white md:text-[40px]" style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}>
                      {step.title}
                    </h4>
                    <p className="max-w-[400px] text-base font-medium leading-[1.6em] tracking-tight text-white/60">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2.5">
                  <Button href="/case-studies" variant="green">
                    All Case Studies
                  </Button>
                  <Button href="/#pricing" variant="grey">
                    See Pricing
                  </Button>
                </div>
              </div>

              {/* Image side */}
              <div className="relative flex h-[340px] items-center justify-center overflow-hidden rounded-2xl bg-white/[0.02] lg:h-[424px]">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-[0.175]"
                  style={{ filter: "blur(60px)" }}
                >
                  <Image
                    src="https://framerusercontent.com/images/kRmGmFg3ZaGrlOZOPRjkMJttg.png"
                    alt=""
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative h-[210px] w-[210px] lg:h-[300px] lg:w-[300px]">
                  <Image
                    src={step.image}
                    alt={`${step.title} Icon`}
                    fill
                    sizes="300px"
                    className="object-contain"
                  />
                </div>
                <h1
                  className="absolute right-5 top-2.5 text-[48px] leading-none tracking-[-0.04em] text-white opacity-10 lg:text-[74px]"
                  style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}
                >
                  {step.number}
                </h1>
              </div>

              {/* Bottom bar spanning */}
              <div className="col-span-1 flex items-center justify-between rounded-b-2xl bg-white/10 px-6 py-4 lg:col-span-2">
                <div className="flex flex-col gap-0.5">
                  <p className="text-xs font-semibold uppercase tracking-[0.02em] text-white/60">
                    {step.stage}
                  </p>
                  <p className="text-[22px] leading-[1.125em] tracking-[-0.02em] text-white" style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}>
                    {step.title}
                  </p>
                </div>
                <Dots active={i} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
