/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./imports/ui/**/*.{js,jsx,ts,tsx,svelte}",
    "./client/*.html",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
}

