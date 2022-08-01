/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgn: '#0e1018',
        primary: '#2afe30',
        secondary: '#1b8520'
      },
    },
  },
  plugins: [],
}
