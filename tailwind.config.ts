import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: "rgb(var(--blush) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        rose: "rgb(var(--rose) / <alpha-value>)",
        "rose-deep": "rgb(var(--rose-deep) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        wash: "rgb(var(--wash) / <alpha-value>)",
        mist: "rgb(var(--mist) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        petal: "0 18px 50px rgba(226, 59, 120, 0.16)",
      },
    },
  },
  plugins: [],
} satisfies Config;
