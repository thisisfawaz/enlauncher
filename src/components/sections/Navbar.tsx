"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/Icons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-ink/70 backdrop-blur-[15px]"
          : "bg-transparent backdrop-blur-[15px]"
      )}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 py-5 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <LogoMark size={40} className="text-lime" />
          <span
            className="text-[26px] text-white"
            style={{
              fontFamily: "var(--font-averia)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            Enlauncher
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative overflow-hidden text-base font-medium tracking-tight text-white/90"
            >
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                {link.label}
              </span>
              <span
                aria-hidden
                className="absolute inset-x-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full"
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Button href="/contact" variant="green">
            Contact Us
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 lg:hidden"
        >
          <div className="relative flex h-4 w-5 flex-col justify-between">
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-full rounded-full bg-white"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-[2px] w-full rounded-full bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-full rounded-full bg-white"
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-ink/95 backdrop-blur-[15px] lg:hidden"
          >
            <div className="flex flex-col gap-6 px-6 pb-8 pt-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-medium tracking-tight text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/contact" variant="green" className="w-fit">
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
