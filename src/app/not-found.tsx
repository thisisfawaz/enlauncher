import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center overflow-x-clip bg-ink">
      <Navbar />
      <section className="relative flex min-h-[70vh] w-full flex-col items-center justify-center gap-6 px-5">
        <div className="flex items-center gap-2">
          <span className="block h-2.5 w-2.5 rounded-[2px] bg-lime" />
          <span className="text-xs font-semibold uppercase tracking-[0.02em] text-white">
            error 404
          </span>
        </div>
        <h1
          className="text-display text-center text-[80px] leading-none text-white md:text-[160px]"
        >
          Page not found
        </h1>
        <p className="max-w-[460px] text-center text-base font-medium leading-[1.6em] tracking-tight text-white/60">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="rounded-full bg-lime px-6 py-3 text-sm font-medium tracking-tight text-black transition-opacity hover:opacity-90"
        >
          Back to home
        </Link>
        <div aria-hidden className="bg-pattern pointer-events-none absolute inset-0 opacity-5 blur-[60px]" />
        <div aria-hidden className="bg-noise pointer-events-none absolute inset-0 opacity-5" />
      </section>
      <Footer />
    </main>
  );
}
