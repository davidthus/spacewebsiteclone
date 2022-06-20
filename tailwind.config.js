/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark': '#0B0D17',
      'accent': '#D0D6F9',
      'light': '#FFF'
    },
    fontFamily: {
      bellefair: ['Bellefair', 'serif'],
      barlow: ['Barlow Condensed', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
  important: true
}
