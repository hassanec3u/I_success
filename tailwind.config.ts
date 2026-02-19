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
        brand: {
          blue: {
            DEFAULT: "#004B87",
            50: "#E6F0F9",
            100: "#B3D4ED",
            200: "#80B8E1",
            300: "#4D9CD5",
            400: "#2680C4",
            500: "#004B87",
            600: "#003D6E",
            700: "#002F55",
            800: "#00213C",
            900: "#001423",
          },
          orange: {
            DEFAULT: "#FF6600",
            50: "#FFF3E6",
            100: "#FFE0BF",
            200: "#FFCC99",
            300: "#FFB366",
            400: "#FF8C33",
            500: "#FF6600",
            600: "#E65C00",
            700: "#CC5200",
            800: "#994000",
            900: "#662B00",
          },
          cyan: {
            DEFAULT: "#00AEEF",
            50: "#E6F7FF",
            100: "#B3E8FF",
            200: "#80D9FF",
            300: "#4DC9FF",
            400: "#1ABAFF",
            500: "#00AEEF",
            600: "#009BD6",
            700: "#0088BD",
            800: "#00668C",
            900: "#00445E",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
