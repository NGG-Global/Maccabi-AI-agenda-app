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
        // PRIMARY — Ofek navy
        primary: {
          DEFAULT: "#1E3C95",
          900: "#040450",
          800: "#0E1F6B",
          700: "#1E3C95",
          600: "#1F3E9B",
          500: "#2B92B7",
          300: "#B8C5E8",
          100: "#EAEEF8",
          50:  "#EAEEF8",
        },
        // ACCENT — Ofek magenta
        accent: {
          DEFAULT: "#D25089",
          900: "#AD2185",
          700: "#D25089",
          500: "#E37FA9",
          300: "#F1B4CE",
          100: "#FBE6EF",
          50:  "#FBE6EF",
        },
        // Blush — panel fill
        blush: {
          700: "#C49199",
          500: "#DEAFB7",
          300: "#ECCAD0",
          100: "#F6E4E7",
        },
        // Categorical — module coding + bottom stripe ONLY
        cat: {
          lavender: "#6B76EC",
          cyan:     "#73D9F0",
          green:    "#A7C86F",
          peach:    "#F9BE94",
          coral:    "#F1717E",
          magenta:  "#D25089",
        },
        maccabi: {
          bg:     "#F4F1ED",
          paper:  "#FAFAFB",
          card:   "#FFFFFF",
          border: "rgba(23,22,22,0.10)",
          text:   "#171616",
          muted:  "#535353",
          subtle: "#808285",
        },
      },
      fontFamily: {
        ploni: ["Ploni", "Assistant", "Heebo", "system-ui", "sans-serif"],
        heebo: ["Heebo", "sans-serif"],
      },
      borderRadius: {
        md: "14px",
        lg: "22px",
        xl: "32px",
      },
      boxShadow: {
        "ofek-1": "0 1px 2px rgba(20,24,60,.04), 0 1px 1px rgba(20,24,60,.03)",
        "ofek-2": "0 6px 16px rgba(20,24,60,.06), 0 2px 4px rgba(20,24,60,.04)",
        "ofek-3": "0 18px 40px rgba(20,24,60,.10), 0 6px 12px rgba(20,24,60,.05)",
      },
      backgroundImage: {
        "grad-navy":  "linear-gradient(180deg, #1E3C95 0%, #040450 100%)",
        "grad-sky":   "linear-gradient(180deg, #DCE3EE 0%, #F3EFE8 100%)",
        "grad-paper": "linear-gradient(180deg, #FFFFFF 0%, #F4F1ED 100%)",
      },
      keyframes: {
        "ofek-ping": {
          "0%":       { transform: "scale(1)",   opacity: "0.7" },
          "75%,100%": { transform: "scale(2.6)", opacity: "0" },
        },
      },
      animation: {
        "ofek-ping": "ofek-ping 2s cubic-bezier(.2,.8,.25,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
