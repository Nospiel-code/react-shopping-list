/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Atomic Age, monospace",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
