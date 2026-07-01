import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        ink: "#1D1D1F",
        "ink-mute": "#6E6E73",
        smoke: "#F5F5F7",
        "smoke-2": "#FAFAFC",
        black: "#000000",
        graphite: "#101012",
        blue: "#0071E3",
        "blue-hover": "#0077ED",
        "blue-link": "#2997FF",
        line: "#D2D2D7",
        "line-dark": "#2A2A2E",
      },
      fontFamily: {
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(3rem, 8vw, 6.5rem)", { lineHeight: "1.03", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.4rem, 5.5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 2.6vw, 2.1rem)", { lineHeight: "1.12", letterSpacing: "-0.015em" }],
      },
      maxWidth: { shell: "1080px", wide: "1400px" },
      letterSpacing: { eyebrow: "0.02em" },
      borderRadius: { "4xl": "2rem", "5xl": "2.5rem" },
      transitionTimingFunction: { out: "cubic-bezier(0.28, 0.11, 0.32, 1)" },
    },
  },
  plugins: [],
};

export default config;
