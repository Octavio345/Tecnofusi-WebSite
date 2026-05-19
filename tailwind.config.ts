import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#07080a",
          900: "#0d0f14",
          800: "#151922",
          700: "#222734"
        },
        brand: {
          red: "#b1080c",
          deep: "#730306",
          bright: "#e0141b",
          soft: "#ff4b55"
        },
        metal: {
          50: "#f8fafc",
          100: "#e8edf3",
          300: "#aeb7c5",
          500: "#697386"
        },
        signal: {
          cyan: "#67e8f9"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0,0,0,0.35)",
        redGlow: "0 0 42px rgba(224,20,27,0.28)"
      },
      backgroundImage: {
        "tech-grid":
          "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
        "radial-sweep":
          "radial-gradient(circle at 18% 18%, rgba(224,20,27,0.18), transparent 30%), radial-gradient(circle at 82% 8%, rgba(103,232,249,0.12), transparent 24%), linear-gradient(135deg, #07080a 0%, #11131a 58%, #18080a 100%)"
      }
    }
  },
  plugins: []
};

export default config;