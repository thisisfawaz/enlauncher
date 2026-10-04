"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { PlusIcon } from "@/components/Icons";
import { FAQS } from "@/lib/data";
import { cn } from "@/lib/utils";

function FaqItem({
  faq,
  open,
  onToggle,
}: {
  faq: (typeof FAQS)[number];
  open: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <div
      className={cn(
        "cursor-pointer overflow-hidden rounded-[60px] bg-white/5 px-[26px] transition-all duration-300",
        open ? "py-5" : "py-[18px]"
      )}
      onClick={onToggle}
    >
      <div className="flex items-start gap-4">
        <div className="flex-1 pt-0.5">
          <p className="text-xl leading-[1.125em] tracking-[-0.02em] text-white" style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}>
            {faq.question}
          </p>
        </div>
        <button
          aria-label={open ? "Collapse" : "Expand"}
          className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-[5px]"
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
        >
          <motion.span
            animate={{ rotate: open ? 135 : 0 }}
            transition={{ duration: 0.25 }}
            className="text-white"
          >
            <PlusIcon size={14} />
          </motion.span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-base font-medium leading-[1.6em] tracking-tight text-white/60">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative flex w-full justify-center overflow-hidden py-[86px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[68px] px-5 lg:px-6">
        <div className="flex w-full max-w-[650px] flex-col items-center gap-[22px]">
          <SectionLabel>faq&apos;s</SectionLabel>
          <h2 className="text-display text-center text-[38px] text-white md:text-[45px] lg:text-[56px]">
            Clear answers before you build
          </h2>
        </div>

        <div className="flex w-full max-w-[700px] flex-col gap-3">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}

          {/* Bottom CTA */}
          <div className="mt-2 flex flex-col items-start justify-between gap-4 rounded-[80px] bg-panel px-6 py-2.5 sm:flex-row sm:items-center">
            <p className="text-base font-medium tracking-tight text-white">
              Still not sure what you need built?
            </p>
            <Button href="/contact" variant="green">
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
