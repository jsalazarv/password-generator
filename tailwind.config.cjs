/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#A4FFAF',
        },
        gray: {
          50: '#E6E5EA',
          100: '#817D92',
          200: '#24232C',
          300: '#18171F',
          400: '#14131B'
        },
        rank: {
          tooWeak: '#F64A4A',
          weak: '#FB7C58',
          medium: '#F8CD65',
          strong: '#A4FFAF',
        }
      }
    },
  },
  plugins: [],
}
