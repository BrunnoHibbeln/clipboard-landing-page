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
        bai: ['var(--font-bai)'],
      },
      fontSize: {
        body: '1.125rem',
      },

      colors: {
        'strong-cyan': 'hsl(171, 66%, 44%)',
        'dark-cyan': 'hsl(171, 64%, 36%)',
        'light-blue': 'hsl(233, 100%, 69%)',
        'dark-blue': 'hsl(233, 50%, 53%)',
        'dark-gray': 'hsl(210, 10%, 33%)',
        'light-gray': 'hsl(201, 11%, 66%)',
      },
      backgroundImage: {
        desktop: ['url(./images/bg-header-desktop.png)'],
        mobile: ['url(./images/bg-header-mobile.png)'],
      },
    },
  },
  plugins: [],
}
