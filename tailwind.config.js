/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        DEFAULT: 'var(--color-primary-90)',
        100: 'var(--color-primary-100)',
        90: 'var(--color-primary-90)',
        80: 'var(--color-primary-80)',
        70: 'var(--color-primary-70)',
        60: 'var(--color-primary-60)',
        50: 'var(--color-primary-50)',
        40: 'var(--color-primary-40)',
        30: 'var(--color-primary-30)',
        20: 'var(--color-primary-20)',
        10: 'var(--color-primary-10)'
      },
      secondary: {
        DEFAULT: 'var(--color-secondary-90)',
        100: 'var(--color-secondary-100)',
        90: 'var(--color-secondary-90)',
        80: 'var(--color-secondary-80)',
        70: 'var(--color-secondary-70)',
        60: 'var(--color-secondary-60)',
        50: 'var(--color-secondary-50)',
        40: 'var(--color-secondary-40)',
        30: 'var(--color-secondary-30)',
        20: 'var(--color-secondary-20)',
        10: 'var(--color-secondary-10)'
      },
      black: {
        10: 'var(--color-black-10)',
        20: 'var(--color-black-20)',
        30: 'var(--color-black-30)',
        40: 'var(--color-black-40)',
        50: 'var(--color-black-50)',
        60: 'var(--color-black-60)',
        70: 'var(--color-black-70)',
        80: 'var(--color-black-80)',
        90: 'var(--color-black-90)',
      },
      white: {
        10: 'var(--color-white-10)',
        20: 'var(--color-white-20)',
        30: 'var(--color-white-30)',
        40: 'var(--color-white-40)',
        50: 'var(--color-white-50)',
        60: 'var(--color-white-60)',
        70: 'var(--color-white-70)',
        80: 'var(--color-white-80)',
        90: 'var(--color-white-90)',
      },
    },
  },
  plugins: [],
};
