/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': 'Montserrat, Arial, sans-serif',
      },
      colors:{
        'default-arslibri': '#FFFFFF',
        'input-arslibri': '#ffffff29',
        'golden-arslibri': '#DBC96C',
        'golden-arslibri-hover': '#DBC96C90',
        'terciary-arslibri': '#D9D9D9',
        'gray-arslibri': '#151515',
      }
    },
  },
  plugins: [],
}

