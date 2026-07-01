import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FBF7F1",
        sand: "#F3ECE1",
        "sand-deep": "#E9DFCF",
        ink: "#24201B",
        "ink-soft": "#3A342C",
        "ink-mute": "#7A7268",
        line: "#E7DDCF",
        accent: "#BE5A38",
        "accent-deep": "#9A3F26",
        "accent-soft": "#D98A5E",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.6rem, 6vw, 5.25rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(1.9rem, 4vw, 3.25rem)", { lineHeight: "1.06", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.35rem, 2.3vw, 1.85rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
      },
      maxWidth: { shell: "1180px" },
      letterSpacing: { eyebrow: "0.2em" },
      transitionTimingFunction: { out: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [],
};

export default config;
