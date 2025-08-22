/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  // 必须是“数组”，不要写成对象 {}！
  plugins: [
    // 可选：如果以后需要官方插件，按需解除注释
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
