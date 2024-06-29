/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'white': '#FFFCF9',
        'white-with-opacity': 'rgba(255, 252, 249, .7)',
        'black': '#0C0C0C',
        'primary-brown': '#734D37',
        'light-brown': '#FCF3EB',
        'grey-bg': '#D9D9D9',
        'dark-grey': '#828894',
        'primary-grey': '#DDDDDD',
        'light-grey': '#FAFAFA',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/filmstrip.png')",
      }
    },
    fontFamily: {
      'sans': ['Jost', 'Lato', 'Arial', 'sans-serif'],
      'fantasy': ['Dancing Script', 'cursive', 'sans-serif'],
    }
  },
  plugins: [],
}
