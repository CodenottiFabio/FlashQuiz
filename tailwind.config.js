/** @type {import('tailwindcss').Config} */
module.exports = {
  module.exports = {
    daisyui: {
      themes: ["cupcake", "bumblebee", "lemonade"],
    },
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
