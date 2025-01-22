import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Min-width breakpoints (mobile first)
        xs: "320px", // Small phones (320px and up)
        sm: "576px", // Large phones (576px and up)
        md: "768px", // Tablets (768px and up)
        lg: "1280px", // Laptops (1280px and up)
        xl: "1440px", // Desktops (1440px and up)

        // Max-width breakpoints
        "max-xs": { max: "480px" }, // Smaller than 480px
        "max-md": { max: "992px" }, // Smaller than 992px
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        main: {
          black: "#171717",
        },
        blue: {
          light: "#e6effd",
          "light-hover": "#d9e7fb",
          "light-active": "#b0ccf7",
          normal: "#005ce6",
          "normal-hover": "#0053cf",
          "normal-active": "#004ab8",
          dark: "#0045ad",
          "dark-hover": "#00378a",
          "dark-active": "#002967",
          darker: "#002051",
        },
      },
      borderRadius: {
        custom: "8px",
      },
    },
  },
  plugins: [],
} satisfies Config;
