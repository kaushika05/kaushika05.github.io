import type { Config } from "tailwindcss";

const config: Config = {
  safelist: ["action-primary", "action-delegate", "action-liaison", "action-ghost", "action-quiet"],
  content: {
    files: ["./src/**/*.{ts,tsx,mdx}"],
    relative: true,
  },
  theme: {
    extend: {
      colors: {
        ink: "#05070D",
        midnight: "#071B3D",
        ocean: "#0B2E66",
        tropic: "#0B4A3B",
        ember: "#FF7A24",
        coral: "#E64274",
        gold: "#FFD27A",
        parchment: "#F4EFE6",
        haze: "#8D9AAF",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6.4vw, 5.6rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2.2rem, 4.5vw, 3.7rem)", { lineHeight: "1.08", letterSpacing: "-0.018em" }],
        "display-md": ["clamp(1.7rem, 3vw, 2.6rem)", { lineHeight: "1.14", letterSpacing: "-0.012em" }]
      },
      maxWidth: { shell: "78rem", prose: "68ch" },
    },
  },
  plugins: [],
};

export default config;
