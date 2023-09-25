/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: "#f5f5f5",
        dark: "#1b1b1b",
        primary: "#B63E96",
        primaryDark: "#58E6D9",

        
        action: '#F87171',
        adventure: '#60A5FA',
        comedy: '#34D399',
        drama: '#A78BFA',
        fantasy: '#FBBF24',
        magic: '#EC4899',
        mecha: '#6EE7B7',
        music: '#9333EA',
        mystery: '#F472B6',
        psychological: '#10B981',
        romance: '#FB923C',
        school: '#7C3AED',
        future: '#8B5CF6',
        sliceOfLife: '#60A5FA',
        sports: '#14B8A6',
        shounen: '#FBBF24',
        thriller: '#DC2626',
        all: '#EC4899',
      },
      backgroundImage: {
        texturedBg: "linear-gradient(to right, rgba(245, 245, 245, .8), rgb(255 221 214 / 80%)), url(https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg);",
        pinkBlue: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
        redBlack: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
      },
    },
  },
  plugins: [],
}
