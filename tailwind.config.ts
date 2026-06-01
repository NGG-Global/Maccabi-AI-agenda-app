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
        primary: {
          DEFAULT: "#004B87",
          50: "#E6EFF7",
          100: "#CCDFF0",
          200: "#99BFE1",
          300: "#669FD1",
          400: "#337FC2",
          500: "#004B87",
          600: "#003D6F",
          700: "#002F57",
          800: "#00213F",
          900: "#001427",
        },
        secondary: {
          DEFAULT: "#00A651",
          50: "#E6F7EE",
          100: "#CCEFDD",
          200: "#99DFBB",
          300: "#66CF99",
          400: "#33BF77",
          500: "#00A651",
          600: "#008841",
          700: "#006A31",
          800: "#004C21",
          900: "#002E11",
        },
        accent: {
          DEFAULT: "#F7941D",
          50: "#FEF3E6",
          100: "#FDE7CC",
          200: "#FBCF99",
          300: "#F9B766",
          400: "#F8A033",
          500: "#F7941D",
          600: "#C67617",
          700: "#955811",
          800: "#643A0B",
          900: "#331D06",
        },
        maccabi: {
          bg: "#F5F7FA",
          card: "#FFFFFF",
          border: "#E2E8F0",
          text: "#1A2B3C",
          muted: "#64748B",
        },
      },
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
