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
        ctaHover: "#EF233C", // Tealish blue CTA hover
        cta: "#D90429", // Dark blue
        accent1: "#FB8500", // Orange
        accent2: "#FFB703", // Yellow
        skyBlue: "#8ECAE6", // Sky Blue
        cvbg: "#D7D7D7", // Light Gray
        bsg: "#848482",  // Dark Gray
        bgDarkBlue: "#01161E",
        bgLightBlue: "#124559",
        sectionBGBlue: "#AEC3B0",
        borderBlue: "#598392",
        offWhite: "#EFF6E0",
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

      ctaHover: "#219EBC", // Tealish blue CTA hover
        cta: "#023047", // Dark blue
        accent1: "#FB8500", // Orange
        accent2: "#FFB703", // Yellow
        skyBlue: "#8ECAE6", // Sky Blue
        cvbg: "#D7D7D7", // Light Gray
        bsg: "#848482"  // Dark Gray

        bgDarkBlue: 01161E,
        bgLightBlue: 124559,
        sectionBGBlue: 598392,
        borderBlue: AEC3B0,
        offWhite: EFF6E0



*/
