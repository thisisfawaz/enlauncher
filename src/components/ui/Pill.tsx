import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Pill({
  children,
  icon,
  variant = "glass",
  className,
}: {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "glass" | "white" | "panel";
  className?: string;
}) {
  const variants = {
    glass: "bg-white/10 text-white backdrop-blur-sm",
    white: "bg-white text-black",
    panel: "bg-panel-2 text-white",
  }[variant];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-tight",
        variants,
        className
      )}
    >
      {icon}
      {children}
    </div>
  );
}
