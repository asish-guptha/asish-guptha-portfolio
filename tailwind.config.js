/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Here is your Elevated Dark Mode palette!
        darkBg: '#0f172a', // Deep slate blue/black
        textMuted: '#94a3b8', // Soft ash gray for descriptions
        textBright: '#f8fafc', // Off-white for headings
        accent: '#3b82f6', // Sleek electric blue
      }
    },
  },
  plugins: [],
}