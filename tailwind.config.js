/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9849c6",

          secondary: "#ba4535",

          accent: "#d877c0",

          neutral: "#212730",

          "base-100": "#FAF9FA",

          info: "#8BA3DA",

          success: "#29A873",

          warning: "#CD8A0E",

          error: "#F4230B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
