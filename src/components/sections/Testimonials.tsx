"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Marquee } from "@/components/animations/Marquee";
import { InstagramIcon } from "@/components/Icons";
import { TESTIMONIALS } from "@/lib/data";

function TestimonialCard({ item }: { item: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="flex w-[370px] shrink-0 flex-row gap-2.5 rounded-[14px] border border-white/5 bg-white/5 p-2 backdrop-blur-[10px] lg:w-[670px]">
      <div className="relative h-[260px] w-[210px] shrink-0 overflow-hidden rounded-[10px] lg:h-[290px] lg:w-[290px]">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col justify-start gap-7 px-3 pt-4">
        <div className="flex flex-col gap-3.5">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-sm text-peach">
                ★
              </span>
            ))}
          </div>
          <p className="max-w-[290px] text-base font-medium leading-[1.6em] tracking-tight text-white/60">
            {item.quote}
          </p>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-white/5 px-5 py-3.5">
          <div className="flex flex-col gap-0.5">
            <p className="text-xl leading-[1.125em] tracking-[-0.02em] text-white" style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}>
              {item.name}
            </p>
            <p className="text-sm font-medium tracking-tight text-white/60">
              {item.role}
            </p>
          </div>
          <a
            href={item.platform}
            target="_blank"
            rel="noopener"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10"
          >
            <InstagramIcon size={16} className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const reduce = useReducedMotion();
  const baseA = TESTIMONIALS.slice(0, 2);
  const baseB = TESTIMONIALS.slice(2, 4);
  // Repeat enough times that one marquee copy always exceeds the viewport,
  // so the strip never runs out and cards never "disappear".
  const repeat = 8;
  const rowA = Array.from({ length: repeat }).flatMap(() => baseA);
  const rowB = Array.from({ length: repeat }).flatMap(() => baseB);

  return (
    <section id="testimonials" className="relative flex w-full flex-col items-center gap-[68px] overflow-hidden py-[86px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[22px] px-5 lg:px-6">
        <SectionLabel>reviews</SectionLabel>
        <h2 className="text-display max-w-[650px] text-center text-[38px] text-white md:text-[45px] lg:text-[56px]">
          What clients say about working with us
        </h2>
      </div>

      <div className="flex w-full flex-col items-center gap-6">
        <Marquee speed={192} gap={24} mask="wide" className="w-full justify-center">
          {rowA.map((t, i) => (
            <li key={`${t.name}-${i}`} className="list-none">
              <TestimonialCard item={t} />
            </li>
          ))}
        </Marquee>
        <Marquee speed={224} gap={24} mask="wide" direction="right" className="w-full justify-center">
          {rowB.map((t, i) => (
            <li key={`${t.name}-${i}`} className="list-none">
              <TestimonialCard item={t} />
            </li>
          ))}
        </Marquee>
      </div>

    </section>
  );
}
