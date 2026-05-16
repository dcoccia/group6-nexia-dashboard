/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nexia-primary': '#1B3A5C',
        'nexia-accent': '#4A90D9',
        'nexia-success': '#27AE60',
        'nexia-warning': '#F39C12',
        'nexia-danger': '#E74C3C',
        'nexia-bg': '#F8FAFC',
        'nexia-card': '#FFFFFF',
        'nexia-text': '#1E293B',
        'nexia-muted': '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
    },
  },
  plugins: [],
}
