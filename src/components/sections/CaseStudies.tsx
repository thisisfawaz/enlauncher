"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Pill } from "@/components/ui/Pill";
import { CASE_STUDIES } from "@/lib/data";
import { EyeIcon, TrendUpIcon, UserIcon, ArrowUpRightIcon } from "@/components/Icons";
import { cn } from "@/lib/utils";

const STAT_ICONS = {
  eye: EyeIcon,
  trend: TrendUpIcon,
  user: UserIcon,
};

function CaseStudyCard({
  study,
  index,
  hoveredIndex,
  columns,
  onHover,
}: {
  study: (typeof CASE_STUDIES)[number];
  index: number;
  hoveredIndex: number | null;
  columns: number;
  onHover: (index: number | null) => void;
}) {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [pointer, setPointer] = useState({ x: 50, y: 50, active: false });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPointer({ x, y, active: true });
    onHover(index);
  };

  useEffect(() => {
    const video = videoRef.current;
    const card = cardRef.current;
    if (!video || !card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: "150px" }
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  const rotateX = reduce || !pointer.active ? 0 : (pointer.y - 50) / 4;
  const rotateY = reduce || !pointer.active ? 0 : (50 - pointer.x) / 4;

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={() => {
        setPointer((p) => ({ ...p, active: false }));
        onHover(null);
      }}
      style={{
        perspective: "1000px",
      }}
    >
      <Link
        ref={cardRef}
        href={study.href}
        className="group relative flex w-full flex-col overflow-hidden rounded-[22px] bg-panel"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
          transition: reduce
            ? undefined
            : "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "transform",
        }}
      >
        {/* Cursor-following swell */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 rounded-[22px] transition-opacity duration-300"
          style={{
            opacity: pointer.active ? 1 : 0,
            background: `radial-gradient(220px circle at ${pointer.x}% ${pointer.y}%, rgba(191,247,71,0.28), rgba(191,247,71,0.08) 40%, transparent 68%)`,
          }}
        />
        {/* Video area */}
        <div className="relative flex h-[410px] flex-col justify-between overflow-hidden p-5 pt-[18px]">
          <div className="bg-hatch pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              maskImage: "linear-gradient(0deg, transparent 0%, #000 100%)",
              WebkitMaskImage: "linear-gradient(0deg, transparent 0%, #000 100%)",
            }}
          >
            <video
              ref={videoRef}
              src={study.video}
              poster={study.poster}
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Stats */}
          <div className="relative z-10 flex flex-wrap items-center gap-[7px]">
            {study.stats.map((stat, i) => {
              const Icon = STAT_ICONS[stat.icon as keyof typeof STAT_ICONS];
              return (
                <Pill
                  key={i}
                  variant={stat.white ? "white" : "glass"}
                  icon={<Icon size={15} />}
                >
                  {stat.value}
                </Pill>
              );
            })}
          </div>

          {/* Title block */}
          <div className="relative z-10 flex flex-col gap-2 px-0.5">
            <p className="text-sm font-medium tracking-tight text-white">
              {study.number}
            </p>
            <p className="text-[28px] leading-[1.125em] tracking-[-0.02em] text-white" style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}>
              {study.title}
            </p>
            <p className="text-sm font-medium tracking-tight text-white/60">
              {study.subtitle}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-[19px] pl-[23px]">
          <div className="flex items-center gap-1.5">
            <Pill variant="panel">{study.category}</Pill>
            <Pill variant="panel">{study.label}</Pill>
          </div>
          <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white/5 bg-panel-2">
            <ArrowUpRightIcon
              size={16}
              className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export function CaseStudies({ showHeader = true }: { showHeader?: boolean }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setColumns(w >= 1024 ? 3 : w >= 768 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      className={cn(
        "relative flex w-full justify-center overflow-hidden",
        showHeader ? "py-[86px]" : "pb-[86px] pt-0"
      )}
    >
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[68px] px-5 lg:px-6">
        {showHeader && (
          <div className="flex w-full max-w-[650px] flex-col items-center gap-[22px]">
            <SectionLabel>case studies</SectionLabel>
            <h2 className="text-display text-center text-[38px] text-white md:text-[45px] lg:text-[56px]">
              Digital solutions we designed and built
            </h2>
          </div>
        )}

        <div
          className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard
              key={study.title}
              study={study}
              index={i}
              hoveredIndex={hoveredIndex}
              columns={columns}
              onHover={setHoveredIndex}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
