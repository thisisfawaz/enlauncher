"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: string;
  href?: string;
  variant?: "green" | "grey" | "dark";
  className?: string;
  onClick?: () => void;
  target?: string;
  type?: "button" | "submit";
};

export function Button({
  children,
  href,
  variant = "green",
  className,
  onClick,
  target,
  type = "button",
}: ButtonProps) {
  const variantClasses = {
    green: "bg-lime text-black",
    grey: "bg-white/10 text-white backdrop-blur-sm",
    dark: "bg-ink text-white",
  }[variant];

  const content = (
    <span className="relative block overflow-hidden">
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden
        className="absolute left-1/2 top-full block -translate-x-1/2 transition-transform duration-300 ease-out group-hover:-translate-y-full"
      >
        {children}
      </span>
    </span>
  );

  const classes = cn(
    "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full px-6 py-2.5 text-sm font-medium tracking-tight transition-colors",
    variantClasses,
    className
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
    if (isExternal) {
      return (
        <a href={href} target={target ?? "_blank"} rel="noopener" className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
