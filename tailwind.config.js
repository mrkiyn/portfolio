/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: '#161518ff',
        castleton: '#00563F',
        emerald: '#50C878',
        onyx: '#1a1a1a'
      },
      spacing: {
        'mia1': '31rem',
        '128': '32rem',
        '256': '45rem',
      },
    },
  },
  plugins: [],
};