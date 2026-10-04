"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  amount?: number;
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReady(true);
    }
  }, []);

  if (!ready) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
