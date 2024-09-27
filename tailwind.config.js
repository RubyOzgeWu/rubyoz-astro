/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      // 主色
      primary: {
        light: "#3b82f6",
        default: "#2563eb",
        dark: "#1e40af",
      },
      // 次要色
      secondary: {
        light: "#818cf8",
        default: "#4f46e5",
        dark: "#3730a3",
      },
      // 跳色（
      accent: {
        light: "#ffb36b",
        default: "#fb923c",
        dark: "#c85a0b",
      },
      // 文字颜色
      text: {
        light: "#d1d5db",
        default: "#6b7280",
        dark: "#111827",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
