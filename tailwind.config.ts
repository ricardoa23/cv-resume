import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        accent1: "#219EBC",
        accent2: "#023047",
        accent3: "#FB8500",
        accent4: "#FFB703",
        sidebar: "#8ECAE6",
        cvbg: "#D7D7D7",
      }
    },
  },
  plugins: [],
}
export default config
/* original colors
        accent: "125699",
        cta: "1E90FF",
        sidebarGray: "848484",
        cvbg: "D7D7D7"
*/