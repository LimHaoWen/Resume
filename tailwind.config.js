/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'md': '770px',
      'lg': '1440px',
      'xl': '1700px',
    },
    colors: {
      'white': '#FFFFFF',
      'lightgray': '#f1f5f9',
      'gray': '#cbd5e1',
      'darkgray': '#64748b',
      'charcoal': '#334155',
      'black': '#020617',
    },
    fontFamily: {
      sans: ['Helvetica', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}

