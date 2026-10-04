"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SERVICES } from "@/lib/data";

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section
      id="services"
      className="relative flex w-full justify-center overflow-hidden py-[86px]"
    >
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[68px] px-5 lg:px-6">
        {/* Heading */}
        <div className="flex w-full max-w-[650px] flex-col items-center gap-[22px]">
          <SectionLabel>services</SectionLabel>
          <h2 className="text-display text-center text-[38px] text-white md:text-[45px] lg:text-[56px]">
            What we design, build and run for businesses
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.number}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: (i % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduce ? undefined : { y: -6 }}
              className="group flex h-[420px] flex-col justify-end gap-0 rounded-[14px] border border-white/5 bg-white/5 p-6 backdrop-blur-[15px] transition-colors hover:bg-white/[0.07]"
            >
              <div className="relative mx-auto h-[200px] w-[200px] shrink-0">
                <Image
                  src={service.image}
                  alt={`${service.title} Icon`}
                  fill
                  sizes="200px"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5">
                  <span className="text-[28px] leading-[1.125em] tracking-[-0.02em] text-white/40" style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}>
                    {service.number}
                  </span>
                </div>
                <p className="text-[28px] leading-[1.125em] tracking-[-0.02em] text-white" style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}>
                  {service.title}
                </p>
                <p className="max-w-[300px] text-base font-medium leading-[1.6em] tracking-tight text-white/60">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
