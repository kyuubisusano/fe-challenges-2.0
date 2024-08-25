/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mob': '375px',
      'tab': '675px',
      'desk': '1366px'
    },
  },
  plugins: [],
}