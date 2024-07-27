/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenyellow: "#adff2f",
        dark: "#212121",
      },
      boxShadow: {
        custom: "0 0 0 2px greenyellow",
      },
      width: {
        circle: "220px",
      },
      height: {
        circle: "220px",
      },
    },
  },
  plugins: [],
};
