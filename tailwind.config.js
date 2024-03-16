/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#040C18",
        secondary: "#81AFDD",
        tertiary: "#FF4820",
      },
      screens: {

        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
