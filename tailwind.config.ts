import type { Config } from 'tailwindcss'

const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1140px',
			},
		},
		extend: {
			colors: {
				white: 'hsl(var(--white))',
				black: 'hsl(var(--black))',
				gray: {
					200: 'hsl(var(--gray-200))',
					300: 'hsl(var(--gray-300))',
					400: 'hsl(var(--gray-400))',
					600: 'hsl(var(--gray-600))',
					700: 'hsl(var(--gray-700))',
					800: 'hsl(var(--gray-800))',
				},
				lime: 'hsl(var(--lime))',
				blue: 'hsl(var(--blue))',

				'gradient-start': 'hsl(var(--gradient-start))',
				'gradient-end': 'hsl(var(--gradient-end))',
			},
			fontFamily: {
				sans: ['var(--font-gilroy)'],
				'sans-bold': ['var(--font-gilroy-bold)'],
				mono: ['var(--font-bebas)'],
			},
			borderRadius: {
				button: 'var(--radius-button)',
				block: 'var(--radius-block)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
