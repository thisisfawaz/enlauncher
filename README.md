# ScaleLab — Social Media Marketing Agency

A high-fidelity Next.js 15 rebuild of the ScaleLab Framer template, recreated with React 19, Tailwind CSS 3, Framer Motion 11, and Lenis.

## Tech Stack

- Framework: Next.js 15 (App Router, React 19)
- Styling: Tailwind CSS 3
- Animation: Framer Motion 11
- Smooth scroll: Lenis
- Fonts: Averia Libre, Averia Serif Libre, Inter (next/font)

## Getting Started

    npm install
    npm run dev      # http://localhost:3000
    npm run build    # production build
    npm run start    # serve the production build

## Pages

- / — home with all 14 sections
- /about-us — team, stats, bento grid, process
- /case-studies — listing
- /case-studies/{luminesce,inflection,horizons,ascendant,spectrum,movement} — detail pages
- /contact — contact form + info panel
- /404 and the global not-found

## Animations & Effects

- Preloader with animated logo and easing progress bar
- Lenis smooth scroll with anchor offset handling
- Word-by-word hero heading reveal with stagger
- Infinite seamless marquees with horizontal mask fades
- Scroll reveals via Framer Motion whileInView
- Count-up stat numbers (easeOutExpo)
- Animated 95% circular engagement gauge
- Continuously rotating dotted globe
- Rotated floating stat cards with entrance springs
- Hover text-swap on buttons and nav links
- IntersectionObserver video autoplay
- Layered noise + blurred pattern backgrounds

## Accessibility

All motion is gated behind prefers-reduced-motion. Videos are muted, playsInline, and lazy. Images use next/image with explicit sizes. Semantic landmarks and labelled controls throughout.

## Notes

All copy, media, and links live in src/lib/data.ts for easy swapping. The /404 route intentionally returns a 404 status (Next.js reserves that code) while still rendering the custom page.
