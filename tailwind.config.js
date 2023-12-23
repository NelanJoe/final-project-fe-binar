import tailwindTypography from "@tailwindcss/typography";
import tailwindForm from "@tailwindcss/forms";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#6148FF",
        "soft-blue": "#489CFF",
        "light-blue": {
          100: "#EBF3FC",
          DEFAULT: "#E8F1FF",
        },
        success: "#73CA5C",
        warning: "#FF0000",
        danger: "#F9CC00",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [
    tailwindTypography,
    tailwindForm({
      strategy: "base",
    }),
    daisyui,
  ],
};
