/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables dark mode on the class attribute
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          50:  "#f3e6f3",
          100: "#DBEAFE",
          200: "#d09bd0",
          300: "#b868b8",
          400: "#a136a1",
          500: "#890489",// Base Blue
          600: "#6e036e",
          700: "#520252",
          800: "#370237",
          900: "#1b011b",
        },
        secondary: {
          50:  "#e6f9f9",
          100: "#b8f0f0",
          200: "#8ae7e7",
          300: "#5cdddd",
          400: "#0bafaf", // Teal Base
          500: "#099494",
          600: "#077878",
          700: "#055c5c",
          800: "#033f3f",
          900: "#021f1f"
        },
        tertiary: {
          50:  "#f9e8e0",
          100: "#f3d1b8",
          200: "#ecb98a",
          300: "#e5a05c",
          400: "#d35400", // Deep Orange Base
          500: "#b14600",
          600: "#8a3900",
          700: "#622b00",
          800: "#3a1d00",
          900: "#1b0e00"
        },
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",
        neutral: {
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280", // Base Grey
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      background: {
        'gradient-primary': "linear-gradient(135deg, #890489 30%, #6e036e 100%)",
        'gradient-secondary': "linear-gradient(135deg, #0bafaf 30%, #077878 100%)",
        'gradient-tertiary': "linear-gradient(135deg, #d35400 30%, #8a3900 100%)",
      },

    },
  },
  plugins: [],
};
