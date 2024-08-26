import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
        },
        gray: {
          DEFAULT: "hsl(var(--gray))",
          dark: "hsl(var(--gray-dark))",
          5: "hsl(var(--gray-dark-5))",
        },
        stroke: {
          DEFAULT: "hsl(var(--stroke))",
          dark: "hsl(var(--stroke-dark))",
        },
        dark: {
          DEFAULT: "hsl(var(--dark))",
          2: "hsl(var(--dark-2))",
          3: "hsl(var(--dark-3))",
        },
        background: {
          DEFAULT: "hsl(var(--background))",
          foreground: "hsl(var(--background-foreground))",
        },
        text: {
          DEFAULT: "hsl(var(--text))",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      transitionDuration: {
        DEFAULT: "150ms",
      },
    },
  },
  plugins: [],
};
export default config;
