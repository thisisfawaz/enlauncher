import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  LogoMark,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  LocationIcon,
} from "@/components/Icons";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

const MAIN_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Stats", href: "/#stats" },
  { label: "Why choose us", href: "/#why-choose-us" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Process", href: "/#process" },
];

const OTHER_LINKS = [
  { label: "About us", href: "/about-us" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
  { label: "404", href: "/404" },
];

const INFO_LINKS = [
  { label: "info@enlauncher.com", href: "mailto:info@enlauncher.com", icon: MailIcon },
  { label: "+234 703 532 1043", href: "tel:+2347035321043", icon: PhoneIcon },
  { label: "Canada, ON · Nigeria, ABJ", href: "https://www.google.com/maps", icon: LocationIcon },
];

export function Footer({ showBackground = true }: { showBackground?: boolean }) {
  return (
    <footer
      className={cn(
        "relative z-10 flex w-full justify-center p-6 pt-0",
        showBackground && "bg-ink"
      )}
    >
      <div className="relative flex w-full max-w-[1200px] flex-col gap-[68px] rounded-[26px] border border-white/5 bg-white/5 p-6 backdrop-blur-[20px] lg:p-10">
        {/* Top */}
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          {/* Brand */}
          <div className="flex w-full max-w-[330px] flex-col gap-[18px]">
            <Link href="/" className="flex items-center gap-2">
              <LogoMark size={40} className="text-lime" />
              <span
                className="text-[28px] text-white"
                style={{ fontFamily: "var(--font-averia)", fontWeight: 700, letterSpacing: "-0.04em" }}
              >
                Enlauncher
              </span>
            </Link>
            <p className="max-w-[500px] text-base font-medium leading-[1.6em] tracking-tight text-white/60">
              We help businesses identify, design and build digital solutions
              that improve how they operate, serve customers and grow.
            </p>
            <div className="flex items-center gap-3 pt-2.5">
              <Button href="/contact" variant="grey">
                Start a conversation
              </Button>
            </div>
          </div>

          {/* Link columns */}
          <div className="flex w-full max-w-[600px] gap-2.5">
            <div className="flex flex-1 flex-col gap-6">
              <p className="text-xl leading-[1.125em] tracking-[-0.02em] text-white" style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}>
                Main Links
              </p>
              <ul className="flex flex-col gap-3">
                {MAIN_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-base font-medium tracking-tight text-white/60 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-1 flex-col gap-6">
              <p className="text-xl leading-[1.125em] tracking-[-0.02em] text-white" style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}>
                Other Pages
              </p>
              <ul className="flex flex-col gap-3">
                {OTHER_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-base font-medium tracking-tight text-white/60 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-1 flex-col gap-6">
              <p className="text-xl leading-[1.125em] tracking-[-0.02em] text-white" style={{ fontFamily: "var(--font-averia)", fontWeight: 700 }}>
                Info Links
              </p>
              <ul className="flex flex-col gap-3">
                {INFO_LINKS.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center gap-2.5 text-base font-medium tracking-tight text-white/60 transition-colors hover:text-white"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-[100px]">
                        <Icon size={16} className="text-white" />
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Giant text — fills the card content width */}
        <div className="w-full opacity-20">
          <span
            className="block w-full select-none whitespace-nowrap text-center leading-[0.9em] tracking-[-0.04em] text-white"
            style={{
              fontFamily: "var(--font-averia)",
              fontWeight: 700,
              fontSize: "clamp(120px, 17vw, 224px)",
            }}
          >
            Enlauncher
          </span>
        </div>
      </div>

      {showBackground && (
        <>
          <div aria-hidden className="bg-noise pointer-events-none absolute inset-0 opacity-5" />
          <div aria-hidden className="bg-pattern pointer-events-none absolute inset-0 opacity-[0.06] blur-[60px]" />
        </>
      )}
    </footer>
  );
}
