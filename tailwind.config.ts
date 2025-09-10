// tailwind.config.ts
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
        deepBlack: "#0D0D0D",
        electricRed: "#E50914",
        amberYellow: "#FFB400",
        lightGrey: "#F5F5F5",
      },
      fontFamily: {
        graduate: ["var(--font-graduate)", "serif"],
        kodeMono: ["var(--font-kode-mono)", "monospace"],
      },
      screens: {
        // Add custom breakpoints if needed
        xs: "475px",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shake: "shake 0.5s ease-in-out infinite",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
