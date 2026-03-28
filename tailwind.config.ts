import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F1A2E",
          light: "#475569",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          2: "#F8FAFC",
          3: "#F1F5F9",
        },
        accent: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
        },
        success: "#059669",
        danger: "#DC2626",
        border: "#E2E8F0",
      },
    },
  },
  plugins: [],
};

export default config;
