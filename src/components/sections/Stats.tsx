"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CountUp } from "@/components/animations/CountUp";
import { HeartIcon, ShareIcon, CursorIcon } from "@/components/Icons";
import { STAT_CARDS } from "@/lib/data";

const ICONS = {
  heart: HeartIcon,
  share: ShareIcon,
  cursor: CursorIcon,
} as const;

function FloatingStatCard({
  card,
  index,
  position,
}: {
  card: (typeof STAT_CARDS)[number];
  index: number;
  position: React.CSSProperties;
}) {
  const reduce = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 50, y: 50, active: false });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPointer({ x, y, active: true });
  };

  const rotateX = reduce || !pointer.active ? 0 : (pointer.y - 50) / 2;
  const rotateY = reduce || !pointer.active ? 0 : (50 - pointer.x) / 2;
  const scale = reduce || !pointer.active ? 1 : 1.08;

  const Icon = ICONS[card.icon as keyof typeof ICONS];

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.9, rotate: 0 }}
      whileInView={{ opacity: 1, scale: 1, rotate: card.rotate }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="absolute"
      style={position}
    >
      <div style={{ perspective: "800px" }}>
        <div
          onMouseMove={handleMove}
          onMouseLeave={() => setPointer((p) => ({ ...p, active: false }))}
          className="flex items-center gap-3 rounded-[10px] bg-panel p-1.5 pr-4"
          style={{
            transform: `scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transformStyle: "preserve-3d",
            transition: reduce
              ? undefined
              : "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
            willChange: "transform",
          }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-ink">
            <Icon size={22} className="text-lime" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <span className="text-base font-medium tracking-tight text-white">
                {card.value}
              </span>
              <span className="rounded-full bg-lime px-2 py-1 text-[10px] font-medium text-black">
                {card.delta}
              </span>
            </div>
            <span className="text-xs font-medium tracking-tight text-white/60">
              {card.label}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Stats() {
  const reduce = useReducedMotion();

  return (
    <section id="stats" className="relative flex w-full justify-center overflow-hidden py-24">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[98px] px-5 lg:px-6">
        {/* Floating cards with the big number centered inside */}
        <div className="relative hidden h-[287px] w-full lg:block">
          {STAT_CARDS.map((card, i) => {
            const positions = [
              { top: 17, left: 41 },
              { top: 17, right: 55 },
              { bottom: 9, left: 25 },
              { bottom: 9, right: 35 },
            ];
            return (
              <FloatingStatCard
                key={i}
                card={card}
                index={i}
                position={positions[i] as React.CSSProperties}
              />
            );
          })}

          {/* Big number centered inside the floating cards */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-[18px]">
            <SectionLabel>Systems In Production</SectionLabel>
            <div className="text-serif-display text-center text-[80px] text-white md:text-[140px]">
              <CountUp end={80055} suffix="+" />
            </div>
            <p className="max-w-[380px] text-center text-base font-medium leading-[1.6em] tracking-tight text-white/60">
              Digital products, platforms and internal systems built for businesses and still running today.
            </p>
          </div>
        </div>

        {/* 3-column grid */}
        <div className="grid w-full max-w-[900px] grid-cols-1 gap-2.5 rounded-2xl bg-panel md:grid-cols-3">
          {[
            { value: 98, suffix: "%", label: "Client Retention Rate" },
            { value: 120, suffix: "K+", label: "High-Value Leads Won" },
            { value: 450, suffix: "+", label: "Campaigns Launched" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-1.5 p-8"
            >
              <p className="text-center text-[34px] leading-[1.125em] tracking-[-0.04em] text-white md:text-[46px]" style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}>
                <CountUp end={s.value} suffix={s.suffix} />
              </p>
              <p className="text-center text-base font-medium tracking-tight text-white/60">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
