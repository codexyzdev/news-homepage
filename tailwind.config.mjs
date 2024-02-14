/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors:{
				transparent: 'transparent',
				current: 'currentColor',
				OffWhite: 'hsl(36, 100%, 99%)',
				GrayishBlue: 'hsl(233, 8%, 79%)',
				DarkGrayishBlue: ' hsl(236, 13%, 42%)',
				VeryDarkBlue: 'hsl(240, 100%, 5%)',
				SoftOrange: 'hsl(35, 77%, 62%)',
				SoftRed: 'hsl(5, 85%, 63%)'
		}
	},
	plugins: [],
}
