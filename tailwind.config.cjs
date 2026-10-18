/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        pink: '#FFA3AC',
        darkPink: '#a62049',
        purple: '#f9e0ff',
        lightBlack: '#0a0f1b',
        lightPurple: '#dbc4fa',
        contactPink: '#ffa6ae',
        contactLilac: '#d9c2ff',
        contactMint: '#9be0b4',
        contactPinkLight: '#c2185b',
        contactLilacLight: '#6d3fc0',
        contactMintLight: '#1f8a4c',
      },
    },
    fontFamily: {
      sans: ['system-ui', 'sans-serif'],
    },
  },
  plugins: [],
}
