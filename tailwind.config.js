/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
        satoshi: ['"Satoshi"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
