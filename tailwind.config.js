/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundColor:{
        "back":"#F1F2F3"
      },
      colors:{
        'head-text':'#2A2A2A',
        'breaking-red':'#C31815',
        'footer':'#0E1E32'
      },
      fontSize:{
        'heading_lg':'32px',
        'heading_sm':'24px',
        'quote':'18px',
        'content_sm':'14px',
        'content_lg':'16px',
        'quote-sm':'12px'
      }
    },
  },
  plugins: [],
}

