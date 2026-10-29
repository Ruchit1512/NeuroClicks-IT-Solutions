import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // NeuroClicks Media Logo-Calibrated Blue & Cyan System
        brand: {
          primary: "#405ECC", // Exact Cobalt Blue from official logo mark
          blue: "#405ECC",
          electric: "#3B82F6",
          electricHover: "#60A5FA",
          navy: "#0B1220",
          cyan: "#38A8B0", // Exact Cyan/Teal from official logo mark
          teal: "#30A0A0",
          slate: "#414850", // Slate from official logo wordmark
          light: "#F5F8FF",
          blueMuted: "rgba(64, 94, 204, 0.15)",
          electricMuted: "rgba(59, 130, 246, 0.15)",
          cyanMuted: "rgba(56, 168, 176, 0.15)",
        },
        dark: {
          950: "#05080F",
          900: "#080D18", // Dark background canvas
          850: "#0B1220", // Deep navy
          800: "#0F172A", // Card surface
          750: "#16233B", // Card hover
          700: "#1E293B",
          600: "#334155",
          500: "#475569",
          400: "#64748B",
          300: "#94A3B8", // Secondary text
          200: "#CBD5E1",
          100: "#F1F5F9",
        },
        border: {
          subtle: "#1E293B",
          default: "#243247",
          strong: "rgba(255, 255, 255, 0.18)",
          accent: "rgba(59, 130, 246, 0.4)",
        },
      },
      fontFamily: {
        sans: [
          "Manrope",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "Space Grotesk",
          "Manrope",
          "-apple-system",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "SF Mono",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.03em",
        normal: "0",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.2em",
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(59, 130, 246, 0.35)",
        glowBlue: "0 0 40px -5px rgba(59, 130, 246, 0.45)",
        glowNavy: "0 0 40px -10px rgba(11, 18, 32, 0.8)",
        card: "0 20px 40px -15px rgba(5, 8, 15, 0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
