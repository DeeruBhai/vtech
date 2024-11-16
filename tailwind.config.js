/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/home/das/Documents/vtech/public/banner.png')",
      },
    },
  },
  plugins: [],
};
//hero: "url('dist/assets/banner.png')",