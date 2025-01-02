/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        typing: "typing 4.5s steps(40) forwards, blink 0.75s step-end infinite",
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
      },
      screens: {
        xxs_custom: "400px",
        xs_custom: "510px",
        slg_custom: "920px",
      },
    },
  },
  plugins: [],
};
