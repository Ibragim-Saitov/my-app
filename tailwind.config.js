/** @type {import('tailwindcss').Config} */

const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [tailwindcss('./tailwind.config.cjs'), autoprefixer],
  content: ['./src/**/*.{js.jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#1B73E8',
      }
    },
  },
  plugins: [],
}

