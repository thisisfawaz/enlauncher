import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export function PageShell({
  children,
  title,
  subtitle,
  eyebrow,
}: {
  children?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: string;
  eyebrow?: string;
}) {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center bg-ink">
      {/* Flowing green glow patches across the whole page (no section demarcation) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 40% at 50% 8%, rgba(191,247,71,0.10) 0%, transparent 60%), radial-gradient(70% 35% at 50% 55%, rgba(191,247,71,0.08) 0%, transparent 65%), radial-gradient(80% 40% at 50% 95%, rgba(191,247,71,0.10) 0%, transparent 62%)",
            filter: "blur(40px)",
          }}
        />
        <div className="bg-pattern absolute left-0 right-0 top-0 h-[30%] opacity-[0.07] blur-[80px]" />
        <div className="bg-pattern absolute left-0 right-0 top-[20%] h-[30%] opacity-[0.06] blur-[80px]" />
        <div className="bg-pattern absolute left-0 right-0 top-[40%] h-[30%] opacity-[0.07] blur-[80px]" />
        <div className="bg-pattern absolute left-0 right-0 top-[60%] h-[30%] opacity-[0.06] blur-[80px]" />
        <div className="bg-pattern absolute left-0 right-0 top-[80%] h-[30%] opacity-[0.07] blur-[80px]" />
        <div className="bg-noise absolute inset-0 opacity-5" />
      </div>

      <Navbar />
      <header className="relative z-10 flex w-full flex-col items-center pt-[180px] pb-12">
        <div className="flex w-full max-w-[900px] flex-col items-center gap-5 px-5 text-center">
          {eyebrow && (
            <div className="flex items-center gap-2">
              <span className="block h-2.5 w-2.5 rounded-[2px] bg-lime" />
              <span className="text-xs font-semibold uppercase tracking-[0.02em] text-white">
                {eyebrow}
              </span>
            </div>
          )}
          <h1 className="text-display text-[42px] text-white md:text-[68px]">
            {title}
          </h1>
          {subtitle && (
            <p className="max-w-[560px] text-base font-medium leading-[1.6em] tracking-tight text-white/60">
              {subtitle}
            </p>
          )}
        </div>
      </header>
      <div className="relative z-10 flex w-full flex-col items-center">
        {children}
      </div>
      <Footer showBackground={false} />
    </main>
  );
}
