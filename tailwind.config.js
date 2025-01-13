/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': 'Quicksand, Arial, sans-serif'
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
  darkMode: 'selector'
}

