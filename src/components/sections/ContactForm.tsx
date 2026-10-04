"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MailIcon, PhoneIcon, LocationIcon } from "@/components/Icons";

const INFO = [
  {
    label: "Email",
    value: "testing@gmail.com",
    href: "mailto:testing@gmail.com",
    icon: MailIcon,
  },
  {
    label: "Phone",
    value: "+1 234 567 890",
    href: "tel:+1234567890",
    icon: PhoneIcon,
  },
  {
    label: "Location",
    value: "Asterdem, NL",
    href: "https://maps.app.goo.gl/BQZR5eSnnjG1gJoT6",
    icon: LocationIcon,
  },
];

export function ContactForm() {
  const reduce = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative flex w-full justify-center px-5 pb-24 lg:px-6">
      <div className="grid w-full max-w-[1200px] grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Form */}
        <motion.form
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="col-span-1 flex flex-col gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-[10px] lg:col-span-3 lg:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Full name" name="name" placeholder="Jane Doe" />
            <Field label="Email" name="email" type="email" placeholder="name@email.com" />
          </div>
          <Field label="Company" name="company" placeholder="Acme Inc." />
          <Field
            label="Budget"
            name="budget"
            placeholder="$1,000 - $5,000"
          />
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium tracking-tight text-white/60">
              Project details
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your goals..."
              className="resize-none rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-medium tracking-tight text-white outline-none transition-colors placeholder:text-white/40 focus:border-lime/50"
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-fit rounded-full bg-lime px-6 py-3 text-sm font-medium tracking-tight text-black transition-opacity hover:opacity-90"
          >
            {submitted ? "Message sent ✓" : "Send message"}
          </button>
        </motion.form>

        {/* Info */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-1 flex flex-col gap-6 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-[10px] lg:col-span-2 lg:p-8"
        >
          <h3
            className="text-[28px] leading-[1.125em] tracking-[-0.02em] text-white"
            style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}
          >
            Contact details
          </h3>
          <ul className="flex flex-col gap-4">
            {INFO.map(({ label, value, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-3 text-base font-medium tracking-tight text-white/60 transition-colors hover:text-white"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Icon size={18} className="text-white" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs uppercase tracking-[0.02em] text-white/40">
                      {label}
                    </span>
                    {value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium tracking-tight text-white/60">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium tracking-tight text-white outline-none transition-colors placeholder:text-white/40 focus:border-lime/50"
      />
    </div>
  );
}
