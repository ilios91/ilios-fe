import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "blue": {
          "light": "#e6effd",
          "light-hover": "#d9e7fb",
          "light-active": "#b0ccf7",
          "normal" :"#005ce6",
          "normal-hover" :"#0053cf",
          "normal-active" :"#004ab8",
          "dark" :"#0045ad",
          "dark-hover" :"#00378a",
          "dark-active" :"#002967",
          "darker" :"#002051",
        }
      },
      borderRadius: {
        custom: "8px 16px 8px 16px"
      }
    },
  },
  plugins: [],
} satisfies Config;
