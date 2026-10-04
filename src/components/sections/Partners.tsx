"use client";

import { Marquee } from "@/components/animations/Marquee";
import {
  LogoOne,
  LogoTwo,
  LogoThree,
  LogoFive,
} from "@/components/BrandLogos";

const LOGOS = [
  { Component: LogoOne, width: 127, height: 30 },
  { Component: LogoTwo, width: 63, height: 30 },
  { Component: LogoThree, width: 79, height: 30 },
  { Component: LogoFive, width: 97, height: 22 },
];

export function Partners() {
  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden py-[35px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center px-5">
        <Marquee speed={45} gap={70} mask="soft" className="max-w-[710px]">
          {LOGOS.map(({ Component, width, height }, i) => (
            <li key={i} className="list-none">
              <Component
                width={width}
                height={height}
                className="text-white"
              />
            </li>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
