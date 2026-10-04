"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { StarIcon } from "@/components/Icons";

const CARDS = [
  {
    src: "https://framerusercontent.com/assets/k13c3KJUzDovqRCk5Cp5qnpmt9k.mp4",
    poster:
      "https://framerusercontent.com/images/FqPF0tVRZqzVPtVaDuXIUICCHM.png?width=904&height=1200",
    views: "128K",
  },
  {
    src: "https://framerusercontent.com/assets/SksyDIEogFdTh8VL1QoJ3rLAE.mp4",
    poster:
      "https://framerusercontent.com/images/o3Zf2ycPfeyISYOBrg3x02MxA.png?width=730&height=644",
    views: "325K",
  },
  {
    src: "https://framerusercontent.com/assets/0tW5DzQkF7iNxtz1cLKRhYUxUqo.mp4",
    poster:
      "https://framerusercontent.com/images/Eq8QKszSHTXWBVkeruXVIorupY.png?width=845&height=1430",
    views: "458K",
  },
];

export function CTA({ showBackground = true }: { showBackground?: boolean }) {
  const [email, setEmail] = useState("");
  const reduce = useReducedMotion();

  return (
    <section className="relative flex w-full justify-center overflow-hidden py-[86px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[68px] px-5 lg:px-6">
        {/* Text */}
        <div className="flex w-full max-w-[650px] flex-col items-center gap-[22px]">
          <div className="flex items-center gap-1.5">
            <StarIcon size={14} className="text-peach" />
            <StarIcon size={14} className="text-peach" />
            <StarIcon size={18} className="text-peach" />
            <StarIcon size={14} className="text-peach" />
            <StarIcon size={14} className="text-peach" />
            <p className="ml-1 text-xs font-medium tracking-tight text-white">
              4.9/5 <span className="text-white/60">(886+ Reviews)</span>
            </p>
          </div>
          <h2 className="text-display text-center text-[38px] text-white md:text-[45px] lg:text-[56px]">
            Ready to turn your idea into a real system?
          </h2>
          <p className="max-w-[500px] text-center text-base font-medium leading-[1.6em] tracking-tight text-white/60">
            Join our exclusive newsletter to get weekly short-form video
            insight on digital strategy, product and building systems that last.
          </p>
        </div>

        {/* Newsletter */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative w-full max-w-[320px]"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@email.com"
            className="w-full rounded-full bg-white/10 py-[15px] pl-5 pr-[115px] text-sm font-medium tracking-tight text-white outline-none placeholder:text-white/60"
          />
          <button
            type="submit"
            className="absolute bottom-[5px] right-[5px] top-[5px] rounded-full bg-lime px-4 text-sm font-medium tracking-tight text-black transition-opacity hover:opacity-90"
          >
            Subscribe
          </button>
        </form>

        {/* Tilted video cards */}
        <div className="relative flex w-full items-end justify-center gap-5">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: -5 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden w-[280px] rounded-2xl border border-white/10 bg-white/10 p-2 backdrop-blur-[50px] md:block"
          >
            <VideoTile {...CARDS[1]} />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="w-[280px] max-w-full shrink-0 rounded-2xl border border-white/10 bg-white/10 p-2 backdrop-blur-[50px]"
          >
            <VideoTile {...CARDS[0]} />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: 5 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden w-[280px] rounded-2xl border border-white/10 bg-white/10 p-2 backdrop-blur-[50px] md:block"
          >
            <VideoTile {...CARDS[2]} />
          </motion.div>
        </div>
      </div>

    </section>
  );
}

function VideoTile({
  src,
  poster,
  views,
}: {
  src: string;
  poster: string;
  views: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[14px]">
      <video
        src={src}
        poster={poster}
        muted
        loop
        autoPlay
        playsInline
        className="aspect-[3/4] w-full object-cover"
      />
      <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
        <span className="block h-3.5 w-3.5 rounded-full bg-black/90" />
        {views}
      </div>
    </div>
  );
}
