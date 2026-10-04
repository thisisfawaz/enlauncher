"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  gap?: number;
  className?: string;
  mask?: "strong" | "soft" | "wide" | "none";
};

const COPIES = 3;

export function Marquee({
  children,
  speed = 30,
  direction = "left",
  gap = 20,
  className,
  mask = "strong",
}: MarqueeProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAnimate(true);
    }
  }, []);

  const maskClass =
    mask === "strong"
      ? "mask-fade-x"
      : mask === "soft"
        ? "mask-fade-x-soft"
        : mask === "wide"
          ? "mask-fade-x-wide"
          : "";

  const copy = (key: number, hidden = false) => (
    <div
      key={key}
      className="flex shrink-0 items-center"
      style={{ gap, paddingRight: gap }}
      aria-hidden={hidden}
    >
      {children}
    </div>
  );

  const track = (
    <div className="flex w-max shrink-0 items-center">
      {Array.from({ length: COPIES }).map((_, i) => copy(i, i > 0))}
    </div>
  );

  if (!animate) {
    return (
      <div
        className={cn(
          "flex w-full overflow-hidden no-scrollbar",
          maskClass,
          className
        )}
      >
        <div className="flex shrink-0 items-center" style={{ gap }}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex w-full overflow-hidden no-scrollbar",
        maskClass,
        className
      )}
    >
      <div
        className="flex w-max"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {track}
      </div>
    </div>
  );
}
