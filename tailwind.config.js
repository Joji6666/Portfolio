/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      xs: { min: "10px", max: "40px" },
    },
  },
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },

  plugins: [],
};
