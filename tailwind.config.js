/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs_custom: "400px",
        xs_custom: "510px",
      },
    },
  },
  plugins: [],
};
