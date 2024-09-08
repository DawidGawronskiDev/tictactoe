/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-100": "#31C3BD",
        "c-200": "#65E9E4",
        "c-300": "#F2B137",
        "c-400": "#FFC860",
        "c-500": "#1A2A33",
        "c-600": "#1F3641",
        "c-700": "#A8BFC9",
        "c-800": "#DBE8ED",
      },
      fontFamily: {
        outfit: '"Outfit", sans-serif',
      },
    },
  },
  plugins: [],
};
