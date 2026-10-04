import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Pricing } from "@/components/sections/Pricing";
import { Platforms } from "@/components/sections/Platforms";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { Preloader } from "@/components/sections/Preloader";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center bg-ink">
      <Preloader />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
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
      <div className="relative z-10 flex w-full flex-col items-center">
      <Navbar />
      <Hero />
      <Partners />
      <Stats />
      <Services />
      <CaseStudies />
      <Pricing />
      <Platforms />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
      </div>
      <Footer showBackground={false} />
    </main>
  );
}
