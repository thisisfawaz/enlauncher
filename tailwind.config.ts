import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0e0f0a",
        lime: "#bff747",
        peach: "#ffa051",
        panel: "#1b1e17",
        "panel-2": "#292e23",
      },
      fontFamily: {
        averia: ["var(--font-averia)", "sans-serif"],
        "averia-serif": ["var(--font-averia-serif)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin-slow 12s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
