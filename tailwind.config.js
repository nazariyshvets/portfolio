/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "white-250": "rgba(255,255,255,0.25)",
        black: "#211f20",
        "black-700": "rgba(33,31,32,0.7)",
        "black-250": "rgba(33,31,32,0.25)",
        grey: "#808080",
        "grey-400": "rgba(128,128,128,0.4)",
        red: "#f00",
        "red-100": "rgba(255,0,0,0.1)",
        "red-250": "rgba(255,0,0,0.25)",
        "red-800": "rgba(255,0,0,0.8)",
      },
      animation: {
        "move-bg": "move-bg 8s infinite linear",
      },
      keyframes: {
        "move-bg": {
          "100%": { "background-position": "400% 0" },
        },
      },
    },
  },
  plugins: [],
};
