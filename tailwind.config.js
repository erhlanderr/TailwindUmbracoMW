/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [],
  mode: 'jit',
  content: ["Views/**/*.cshtml", "Views/**/*.razor", "Components/**/*.razor"],
  safelist: [
    {
      pattern: /grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ["sm","md","lg","xl","2xl"],
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'],
        'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/1": "3 / 1",
        "2/1": "2 / 1",
      }
    },
  },
  corePlugins: {
    aspectRatio: true,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

