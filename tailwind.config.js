/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        light: '#ffffff',
        thead: '#f7f8f9',
        textHeading: '#1f2937',
        textColor: '#6b7280',
      },
    },
  },
  plugins: [],
};
