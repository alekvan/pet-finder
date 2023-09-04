/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)'],
        lora: ['var(--font-lora)'],
      },
      colors: {
        'orange-light': '#f29f05',
        'orange-dark': '#f28705',
        'blue-light': '#1243a6',
        'blue-dark': '#022859',
        'brown-light': '#734a27',
      },
      backgroundImage: {
        'front-page-img': "url('/images/front_page_news_bg.jpg')",
        'mobile-page-img': "url('/images/mobile_front_page_news_bg.jpg')",
      },
      width: {
        'pet-cards': '300px',
      },
    },
  },
  plugins: [],
};
