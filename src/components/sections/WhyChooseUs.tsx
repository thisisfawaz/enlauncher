"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LogoMark, PlayIcon } from "@/components/Icons";
import { Marquee } from "@/components/animations/Marquee";

const SMALL_LOGOS = [
  "https://framerusercontent.com/images/GjuaIQ7a9Hoqgcemt3oEDM1qY.svg",
  "https://framerusercontent.com/images/P5DY6PL6JRqBrj4csO5hqRpHY.svg",
  "https://framerusercontent.com/images/eh8Bbw9HoiIRUlBMW3iawNBUo2Y.svg",
  "https://framerusercontent.com/images/H9Go1dvEIr8wRnHrj9AOsjYNBog.svg",
  "https://framerusercontent.com/images/w6he59X0HPIyZbXft0Ez6pFBU4.svg",
  "https://framerusercontent.com/images/lCO0eguNUI4vMfWck6QDtCQr94.svg",
];

const MEDIUM_LOGOS = [
  "https://framerusercontent.com/images/va7hGRR3zb8SFG7x1BGOVLC0Y.svg",
  "https://framerusercontent.com/images/6SI6SeHLzUwdihHZKrOpnZxyu4.svg",
  "https://framerusercontent.com/images/AMWQv0BDpkjuS82sHbKLQ7EJvTw.svg",
  "https://framerusercontent.com/images/ObvOB28IvWbIYKMlgoiri9u4Fs.svg",
  "https://framerusercontent.com/images/rP6Kw8coV3E9yhOR4IXcHDqdI.svg",
  "https://framerusercontent.com/images/0kgXjevorIwloErWLBVtFTcyk.svg",
];

const LARGE_LOGOS = [
  "https://framerusercontent.com/images/qTgjFlGDQwrYVNmM6wLgYzvNTQ.svg",
  "https://framerusercontent.com/images/0jKO8DDttyQaCyfqckH6dcpWo.svg",
  "https://framerusercontent.com/images/PePN10slEgqz0WOzHWXHhvEo6w.svg",
  "https://framerusercontent.com/images/pvKuQpGti4DblK7XjkQjz1178g.svg",
  "https://framerusercontent.com/images/mXnxCYkLShx5khj0U9JNxGDzb8.svg",
  "https://framerusercontent.com/images/Nd7SRcTjJKl5MsiT00wf5dKhA.svg",
];

function GaugeCircle() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setProgress(95);
      return;
    }
    let frame: number;
    const start = performance.now();
    const duration = 1500;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased * 95);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce]);

  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const dash = (progress / 100) * circumference;

  return (
    <div ref={ref} className="relative h-56 w-56">
      <svg
        viewBox="0 0 180 180"
        className="h-full w-full -rotate-90 motion-safe:animate-spin-slow"
      >
        <circle
          cx="90"
          cy="90"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="6"
        />
        <circle
          cx="90"
          cy="90"
          r={radius}
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${circumference} 0`}
        />
        <defs>
          <linearGradient id="gaugeGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="9.73%" stopColor="#0a0a0a" />
            <stop offset="10.81%" stopColor="#bff747" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
        <span className="text-[32px] leading-[1.125em] tracking-[-0.02em] text-white" style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}>
          {Math.round(progress)}%
        </span>
        <span className="text-xs font-medium tracking-tight text-white/60">
          System Uptime
        </span>
      </div>
    </div>
  );
}

function GlobeVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative flex h-[220px] w-[220px] items-center justify-center">
      {/* Glow */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full bg-lime/20"
        style={{ filter: "blur(60px)" }}
      />
      <motion.svg
        viewBox="0 0 200 200"
        className="relative h-[200px] w-[200px]"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        <circle
          cx="100"
          cy="100"
          r="78"
          fill="none"
          stroke="rgba(191,247,71,0.35)"
          strokeWidth="1"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="78"
          ry="30"
          fill="none"
          stroke="rgba(191,247,71,0.35)"
          strokeWidth="1"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="30"
          ry="78"
          fill="none"
          stroke="rgba(191,247,71,0.35)"
          strokeWidth="1"
        />
        <circle cx="100" cy="100" r="78" fill="url(#globeFill)" opacity="0.08" />
        <defs>
          <radialGradient id="globeFill" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#bff747" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        {[
          [60, 70],
          [140, 60],
          [90, 130],
          [150, 130],
          [50, 140],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="#bff747" />
        ))}
      </motion.svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <LogoMark size={44} className="text-lime" />
      </div>
    </div>
  );
}

function BentoFooter({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-b-2xl bg-white/10 p-[26px]">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold uppercase tracking-[0.02em] text-white/60">
          {eyebrow}
        </p>
        <p className="text-[22px] leading-[1.125em] tracking-[-0.02em] text-white" style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}>
          {title}
        </p>
      </div>
    </div>
  );
}

function IconRow({ logos }: { logos: string[] }) {
  return (
    <Marquee speed={30} gap={16} mask="soft">
      {logos.map((logo, i) => (
        <li
          key={`${logo}-${i}`}
          className="flex h-8 w-8 list-none items-center justify-center rounded-full bg-white/10 backdrop-blur-[100px]"
        >
          <Image
            src={logo}
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
          />
        </li>
      ))}
    </Marquee>
  );
}

export function WhyChooseUs() {
  const reduce = useReducedMotion();

  return (
    <section id="why-choose-us" className="relative flex w-full justify-center overflow-hidden py-[86px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[78px] px-5 lg:px-6">
        <div className="flex w-full max-w-[650px] flex-col items-center gap-[22px]">
          <SectionLabel>why choose us</SectionLabel>
          <h2 className="text-display text-center text-[38px] text-white md:text-[45px] lg:text-[56px]">
            Why businesses build with Enlauncher
          </h2>
        </div>

        {/* Bento rows */}
        <div className="flex w-full flex-col gap-4">
          {/* Row 1 */}
          <div className="flex w-full flex-col gap-4 lg:flex-row">
          {/* Row 1: Result Oriented (narrow) */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col overflow-hidden rounded-2xl lg:flex-[1]"
          >
            <div className="flex h-[300px] items-center justify-center bg-white/5">
              <GaugeCircle />
            </div>
            <BentoFooter eyebrow="PROVEN METRICS" title="Result Oriented" />
          </motion.div>

          {/* Row 1: Creative Team (wider) */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="flex flex-col overflow-hidden rounded-2xl lg:flex-[1.35]"
          >
            <div className="relative flex h-[300px] items-center justify-center bg-white/5 pt-10">
              <div className="flex items-center">
                <div className="relative h-[100px] w-[100px] rounded-full border-2 border-transparent brightness-50">
                  <Image src="https://framerusercontent.com/images/dslZt14iz85efdXaSF1uG8T3JG0.png" alt="Zain Malik" fill className="rounded-full object-cover" />
                </div>
                <div className="relative -ml-3 h-[150px] w-[150px] rounded-full border-4 border-panel">
                  <Image src="https://framerusercontent.com/images/GvdwqqWKp7sJHdXGB3rkyE4LCk.png" alt="Aaron Brooks" fill className="rounded-full object-cover" />
                </div>
                <div className="relative -ml-3 h-[100px] w-[100px] rounded-full border-2 border-transparent brightness-50">
                  <Image src="https://framerusercontent.com/images/efdh5k2mU3IJX4ILTny2nwPwNHg.png" alt="Marcus Chen" fill className="rounded-full object-cover" />
                </div>
              </div>
            </div>
            <BentoFooter eyebrow="STRATEGY & ENGINEERING" title="One Team, Start To Finish" />
          </motion.div>

          {/* Row 1: Smart Toolkit (narrow) */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="flex flex-col overflow-hidden rounded-2xl lg:flex-[1]"
          >
            <div className="flex h-[300px] flex-col items-center justify-center gap-4 bg-white/5 pt-7">
              <IconRow logos={SMALL_LOGOS} />
              <IconRow logos={MEDIUM_LOGOS} />
              <IconRow logos={LARGE_LOGOS} />
            </div>
            <BentoFooter eyebrow="SMART TOOLKIT" title="Platform powered" />
          </motion.div>

          </div>

          {/* Row 2 */}
          <div className="flex w-full flex-col gap-4 lg:flex-row">
          {/* Card 4: Global Reach (wider) */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="flex flex-col overflow-hidden rounded-2xl lg:flex-[1.35]"
          >
            <div className="relative flex h-[300px] items-center justify-center overflow-hidden bg-white/5">
              <GlobeVisual />
            </div>
            <BentoFooter eyebrow="ALWAYS CONNECTED" title="Systems That Talk To Each Other" />
          </motion.div>

          {/* Card 5: 24/7 Support (narrow) */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="flex flex-col overflow-hidden rounded-2xl lg:flex-[1]"
          >
            <div className="relative flex h-[300px] items-center justify-center bg-white/5">
              <Image
                src="https://framerusercontent.com/images/W2orF33LBsY8vfe7zjKlnIqt4.png"
                alt="24/7 Support"
                width={220}
                height={220}
                className="object-contain"
              />
            </div>
            <BentoFooter eyebrow="ALWAYS ACTIVE" title="24/7 Support" />
          </motion.div>

          {/* Card 6: Founder Note (narrow) */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-[5px] lg:flex-[1]"
          >
            <div className="relative h-[300px] overflow-hidden">
              <video
                src="https://framerusercontent.com/assets/e6WuZKs3ZYR8d1v4bI1dVOba6w0.mp4"
                poster="https://framerusercontent.com/images/Q6cPtHYZNTcAf49DCJe9ov3qy8.jpeg"
                muted
                loop
                autoPlay
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between bg-white/10 p-[26px]">
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold uppercase tracking-[0.02em] text-white/60">
                  FOUNDER NOTE
                </p>
                <p className="text-[22px] leading-[1.125em] tracking-[-0.02em] text-white" style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}>
                  James Carter
                </p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <PlayIcon size={18} className="ml-0.5 text-white" />
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
