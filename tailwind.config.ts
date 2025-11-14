import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E7F9FD",
        colorLight: "#6B7280",
        secondary: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
