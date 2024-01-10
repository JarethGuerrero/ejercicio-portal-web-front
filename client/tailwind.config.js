/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-oscuro': '#253746',
        'gris-claro': '#CCCCCC',
        'verde-oscuro': '#1E8449',
        'blanco': '#FFFFFF',
        'azul-claro': '#3498DB',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}