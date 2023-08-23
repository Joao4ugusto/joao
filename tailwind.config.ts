/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "color-black": "#151718",
        "color-font-principal": "#E4E4E7",
        "color-font-secundaria": "#9f9f9f",
      }
    },
    screens: {
      'sm': '540px',
      'md': '768px',
      "mf": "820px",
      "sy": "912px",
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'mobile': '480px', 
    },
  plugins: [],
}
}
