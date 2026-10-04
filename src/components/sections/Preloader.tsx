"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LogoMark } from "@/components/Icons";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Always release scroll lock, no matter what.
    const unlock = () =>
      document.documentElement.classList.remove("lenis-stopped");

    if (reduce) {
      setVisible(false);
      unlock();
      return;
    }

    document.documentElement.classList.add("lenis-stopped");

    const start = performance.now();
    const duration = 1600;
    let frame = 0;
    let timeout = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased * 100);
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        timeout = window.setTimeout(() => {
          setVisible(false);
          unlock();
        }, 250);
      }
    };

    frame = requestAnimationFrame(tick);

    // Hard failsafe: never allow the overlay to persist beyond 4s.
    const failsafe = window.setTimeout(() => {
      setVisible(false);
      unlock();
    }, 4000);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      window.clearTimeout(failsafe);
      unlock();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-ink"
        >
          <div className="flex items-center gap-5">
            <LogoMark size={68} className="text-lime" />
            <span
              className="text-[38px] leading-[1.2em] tracking-[-0.04em] text-white md:text-[56px]"
              style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}
            >
              En<span>launcher</span>
            </span>
          </div>

          <div className="h-1 w-[60vw] max-w-[600px] overflow-hidden rounded-full bg-white/20">
            <div
              className="h-full rounded-full bg-lime transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
