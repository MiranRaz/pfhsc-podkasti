/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          600: '#4B5563',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        heading: ['var(--font-bebas-neue)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}