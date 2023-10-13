/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        press1: "url('./src/assets/images/pressPhoto-1 copy.jpg')",
        press2: "url('./src/assets/images/pressPhoto-2.jpeg')"
      }
    },
  },
  plugins: [],

};

