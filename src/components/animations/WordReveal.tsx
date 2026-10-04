"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type WordRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
  stagger?: number;
};

export function WordReveal({
  text,
  className,
  as = "p",
  delay = 0,
  stagger = 0.04,
}: WordRevealProps) {
  const [mounted, setMounted] = useState(false);
  const [reduce, setReduce] = useState(false);
  const words = text.split(" ");
  const MotionTag = motion[as] as typeof motion.p;

  useEffect(() => {
    setMounted(true);
    setReduce(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  // Server render + reduced-motion + no-JS fallback: plain visible text.
  // This guarantees the heading is never permanently hidden.
  if (!mounted || reduce) {
    const Tag = as;
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          style={{ display: "inline-block", willChange: "transform" }}
          variants={{
            hidden: { opacity: 0, y: "0.4em" },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}
