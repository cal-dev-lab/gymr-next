/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'grotesk': ['Space Grotesk', 'sans-serif']
      },
    },
    colors: {
      transparent: 'transparent',
      'white': '#fff',
      'off-white': '#f0f0f0',
      'background': '#000f17',
      'black': '#0f0f0f',
      'purple': '#9000ff',
      'green': '#1bcf36'
    },
  },
  plugins: [],
}
