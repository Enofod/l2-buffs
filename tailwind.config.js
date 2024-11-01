/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    gridTemplateColumns: {
      '11': 'repeat(11, minmax(0, 1fr))'
    }
  },
  plugins: [],
}

