import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        coral: "#FF6B6B",  // Updated to a softer coral
        neon: "#00FFDD",   // More cyan-leaning neon
        sunny: "#FFE566",  // Softer neon yellow
        magenta: "#FF61DC", // New neon pink
        dark: "#0A0A0A",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        bungee: ["Bungee Shade", "cursive"],
        comic: ["Comic Neue", "cursive"],
      },
      keyframes: {
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { 
            transform: "translate(-3px, 3px)",
            textShadow: "-2px 0 #ff00ff, 2px 2px #00ffff"
          },
          "40%": { 
            transform: "translate(-3px, -3px)",
            textShadow: "2px 0 #00ffff, -2px -2px #ff00ff"
          },
          "60%": { 
            transform: "translate(3px, 3px)",
            textShadow: "-2px 0 #00ffff, 2px 2px #ff00ff"
          },
          "80%": { 
            transform: "translate(3px, -3px)",
            textShadow: "2px 0 #ff00ff, -2px -2px #00ffff"
          }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        glitch: "glitch 3s infinite",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;