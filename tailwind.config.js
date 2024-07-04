/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily:{
        title: ['Young Serif'],
        body: ['Outfit']
      },
      colors: {
        primary: '#9c5d49',
        secondary: '#7b284f'
      },
    },
  },
  plugins: [],
}

