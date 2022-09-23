/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#81b9f4",

          secondary: "#7df2b6",

          accent: "#1ba3aa",

          neutral: "#1D1D25",

          "base-100": "#E9E6EA",

          info: "#95DAEF",

          success: "#7BE0AC",

          warning: "#957509",

          error: "#E95449",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
