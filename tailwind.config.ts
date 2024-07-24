import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "basic-white": "#EEEEF2",
        primary: "#9FA0D7",
        secondary: "#BDBDC7",
        accent: "#997E9C",
      },
    },
  },
  plugins: [],
};
export default config;
