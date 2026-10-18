/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'deep-space-blue': '#12263a',
        'strong-cyan': '#06bcc1',
        'ash-grey': '#c5d8d1',
        'parchment': '#f4edea',
        'soft-apricot': '#f4d1ae',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        arabic: ['Tajawal', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
