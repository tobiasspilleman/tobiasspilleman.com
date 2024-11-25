/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'false',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'black': '#191308',
        'light-black': '#322A26',
        'gold': '#A98760',
        'gold-light': '#BA9F80',
        'grey-light': '#F6F4F3'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  }
}