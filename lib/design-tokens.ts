/**
 * NeuroClicks Media — IT Solutions
 * Brand Design Tokens
 *
 * Primary Blue System:
 * - Primary blue: #2563EB
 * - Electric blue: #3B82F6
 * - Deep navy: #0B1220
 * - Dark background: #080D18
 * - Light background: #F5F8FF
 * - White: #FFFFFF
 * - Secondary text: #94A3B8
 * - Subtle borders: #243247
 */

export const designTokens = {
  colors: {
    bg: {
      primary: "#080D18", // Dark background canvas
      navy: "#0B1220", // Deep navy section surface
      card: "#0F172A", // Card surface (slate-900 / dark navy)
      cardHover: "#16233B", // Card hover surface
      elevated: "#1E293B", // Elevated dropdowns & flyouts
      light: "#F5F8FF", // Light background for contrast sections
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#94A3B8",
      muted: "#64748B",
      inverse: "#080D18",
    },
    accent: {
      primary: "#2563EB", // Primary blue
      electric: "#3B82F6", // Electric blue
      electricHover: "#60A5FA",
      primaryMuted: "rgba(37, 99, 235, 0.15)",
      electricMuted: "rgba(59, 130, 246, 0.15)",
      cyan: "#38BDF8",
    },
    border: {
      subtle: "#1E293B",
      default: "#243247",
      accent: "rgba(59, 130, 246, 0.4)",
      strong: "rgba(255, 255, 255, 0.2)",
    },
  },
  typography: {
    display: "var(--font-display)",
    body: "var(--font-body)",
    mono: "var(--font-mono)",
  },
  radii: {
    sm: "6px",
    md: "10px",
    lg: "16px",
    xl: "24px",
    full: "9999px",
  },
} as const;

export type DesignTokens = typeof designTokens;
