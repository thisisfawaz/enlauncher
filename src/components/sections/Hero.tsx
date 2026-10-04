"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { VideoCard } from "@/components/ui/VideoCard";
import { Marquee } from "@/components/animations/Marquee";
import { WordReveal } from "@/components/animations/WordReveal";
import { StarIcon } from "@/components/Icons";

const ROW_ONE = [
  {
    src: "https://framerusercontent.com/assets/gp3blZUDspetzymzB79wVk8VUHI.mp4",
    poster:
      "https://framerusercontent.com/images/7nFf9IbbxdaoAOVZlfz3zbLmTo.png?width=464&height=688",
    index: "01",
    label: "Ad Creative",
  },
  {
    src: "https://framerusercontent.com/assets/iVPRr8xeSS1rlSJd7kHb0n2U.mp4",
    poster:
      "https://framerusercontent.com/images/xeW36SHtPT5MxQLvoW3CGLrEf5E.png?width=1430&height=1080",
    index: "02",
    label: "E-Commerce",
  },
  {
    src: "https://framerusercontent.com/assets/yEnMIOwyfpYo76CSCcMNqrgwSZo.mp4",
    poster:
      "https://framerusercontent.com/images/PsgpGNihYO7ZtYkd0fbvVJJMNE.jpg?width=1552&height=1191",
    index: "04",
    label: "Fintech",
  },
  {
    src: "https://framerusercontent.com/assets/vfVR9I89BORKCWbDuzNs3BKeE.mp4",
    poster:
      "https://framerusercontent.com/images/wVOT663O4HCcrAuDd00FcgcX3o.png?width=784&height=681",
    index: "03",
    label: "Lifestyle",
  },
];

const ROW_TWO = [
  {
    src: "https://framerusercontent.com/assets/S3XEbQk5BqPTj6uBEhFhB8w1wI.mp4",
    poster:
      "https://framerusercontent.com/images/WK6lK401ipnX8OnoGPHF2JU4Nc0.png?width=464&height=520",
    index: "08",
    label: "Brand Voice",
  },
  {
    src: "https://framerusercontent.com/assets/UGiAQOcVPMRUPcnkE0Bcwkal3ck.mp4",
    poster:
      "https://framerusercontent.com/images/tSTRArq3fOr5t58N1lSe9TjCY.png?width=1080&height=1080",
    index: "06",
    label: "Startups",
  },
  {
    src: "https://framerusercontent.com/assets/nOuH4yEHcy9oeHDbHQ2iVtv7c.mp4",
    poster:
      "https://framerusercontent.com/images/ZjifPcHaDqNMT7BMcf1mx6HLck.jpg?width=877&height=766",
    index: "05",
    label: "Creators",
  },
  {
    src: "https://framerusercontent.com/assets/lop35fvARjtNNllAegKRWIInz4.mp4",
    poster:
      "https://framerusercontent.com/images/iBP4XjhvIDCOfxOJfuFrk3VRgb4.png?width=713&height=1936",
    index: "07",
    label: "Paid Social",
  },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const centerY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <header
      ref={ref}
      className="relative flex w-full flex-col items-center overflow-hidden pt-[145px]"
    >
      <div className="relative flex w-full max-w-[1200px] flex-col items-center gap-[68px] px-5 lg:px-6">
        {/* Text wrapper */}
        <div className="flex w-full max-w-[700px] flex-col items-center gap-5">
          {/* Rating badge */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-1.5"
          >
            <StarIcon size={14} className="text-peach" />
            <StarIcon size={14} className="text-peach" />
            <StarIcon size={18} className="text-peach" />
            <StarIcon size={14} className="text-peach" />
            <StarIcon size={14} className="text-peach" />
            <p className="ml-1 text-xs font-medium tracking-tight text-white">
              4.9/5{" "}
              <span className="text-white/60">(886+ Reviews)</span>
            </p>
          </motion.div>

          {/* Heading */}
          <WordReveal
            as="h1"
            text="Turn business needs into digital products."
            className="text-display text-center text-[48px] text-white md:text-[68px] lg:text-[74px]"
            delay={0.35}
          />

          {/* Subheading */}
          <WordReveal
            as="p"
            text="We understand what a business needs, determine the right digital solution, then design and build it — from platforms and systems to websites."
            className="max-w-[510px] text-center text-base font-medium leading-[1.6em] tracking-tight text-white/60"
            delay={0.6}
            stagger={0.015}
          />
        </div>

        {/* Buttons */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Button href="/case-studies" variant="green">
            All Case Studies
          </Button>
          <Button href="/#pricing" variant="grey">
            See Pricing
          </Button>
        </motion.div>

        {/* Video area */}
        <div className="relative flex h-[500px] w-full items-center justify-center gap-x-5 lg:h-[650px]">
          {/* Center video */}
          <div
            className="absolute left-1/2 top-1/2 z-[4] flex h-[421px] w-[308px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-2xl border border-white/10 bg-white/10 p-2 backdrop-blur-[50px] lg:h-[608px] lg:w-[436px]"
          >
            <div className="relative w-full flex-1 overflow-hidden rounded-[14px]">
              <video
                src="https://framerusercontent.com/assets/WnVJjpL0cuzylD52mJKJRFkdMs.mp4"
                poster="https://framerusercontent.com/images/NqVjxugFENAhLkgcdOHw6ZVayvs.png?width=1200&height=800"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
              {/* Floating stat */}
              <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
                <span className="block h-3.5 w-3.5 rounded-full bg-black/90" />
                128K
              </div>
            </div>
            {/* Bottom bar */}
            <div className="mt-2 flex items-center justify-between rounded-xl bg-white/10 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime/20">
                  <span className="block h-3 w-3 rounded-full bg-lime" />
                </span>
                <span className="block h-6 w-6 rounded-full border border-white/40" />
                <span className="block h-6 w-6 rounded-full border border-white/40" />
              </div>
              <div className="h-6 w-6 rounded-full bg-white/10" />
            </div>
          </div>

          {/* Marquee rows */}
          <div className="relative flex w-full flex-1 flex-col items-center gap-5 opacity-50">
            <Marquee speed={60} gap={20} mask="strong">
              {ROW_ONE.map((v) => (
                <li key={v.index} className="list-none">
                  <VideoCard {...v} />
                </li>
              ))}
            </Marquee>
            <Marquee speed={55} gap={20} mask="strong" direction="right">
              {ROW_TWO.map((v) => (
                <li key={v.index} className="list-none">
                  <VideoCard {...v} />
                </li>
              ))}
            </Marquee>
          </div>
        </div>
      </div>

      {/* Pattern overlay */}
      <div
        aria-hidden
        className="bg-pattern pointer-events-none absolute inset-0 z-[1] opacity-25 blur-[60px]"
      />
      {/* Noise overlay */}
      <div
        aria-hidden
        className="bg-noise pointer-events-none absolute inset-0 z-[1] opacity-[0.065]"
      />
    </header>
  );
}
