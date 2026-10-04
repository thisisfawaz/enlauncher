"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function VideoCard({
  src,
  poster,
  index,
  label,
  className,
  width = 290,
  height = 150,
}: {
  src: string;
  poster: string;
  index: string;
  label: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "100px" }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "flex shrink-0 flex-col gap-1.5 rounded-xl border border-white/5 bg-white/10 p-2 backdrop-blur-[10px]",
        className
      )}
      style={{ width }}
    >
      <div
        className="relative w-full overflow-hidden rounded-lg"
        style={{ height }}
      >
        <video
          ref={ref}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex items-center gap-2 px-1.5 py-1.5">
        <span className="text-sm font-medium tracking-tight text-white">
          {index}
        </span>
        <span className="h-px flex-1 bg-white/10" />
        <span className="text-sm font-medium tracking-tight text-white">
          {label}
        </span>
      </div>
    </div>
  );
}
