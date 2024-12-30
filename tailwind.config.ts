import type { Config } from 'tailwindcss'

import plugin from './tailwind.plugin'

const _padding: number = 1

const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{ts,tsx,md,mdx}'],
	theme: {
		container: {
			center: true,
			padding: `${_padding}rem`,
			screens: {
				'2xl': `calc(1128px + ${2 * _padding}rem)`,
			},
		},
		extend: {
			colors: {
				background: 'hsl(0 0% 100%)',
				foreground: 'hsl(225 12% 19%)',
				border: 'hsl(218 44% 94%)',

				primary: 'hsl(76 100% 69%)',
				secondary: 'hsl(223 100% 74%)',

				onyx: 'hsl(200, 7%, 9%)',

				dark: 'hsl(225 12% 19%)',
				gray: {
					100: 'hsl(225 12% 19%)',
					200: 'hsl(222 10% 25%)',
					300: 'hsl(222 9% 38%)',

					700: 'hsl(230 13% 72%)',
					800: 'hsl(217 24% 87%)',
					900: 'hsl(218 44% 94%)',
				},
				white: 'hsl(0 0% 100%)',

				'gradient-start': 'hsl(180 73% 80%)',
				'gradient-end': 'hsl(223 99% 74%)',
			},
			fontSize: {
				xs: '0.875rem',
				sm: '1rem',
				md: '1.25rem',
				lg: '1.5rem',
				xl: '2rem',
				'2xl': '3rem',
				'3xl': '4rem',
				'4xl': '6rem',
			},
			maxWidth: {
				prose: '85ch',
			},
			fontFamily: {
				bebas: ['var(--font-bebas)'],
				gilroy: ['var(--font-gilroy)'],
				'gilroy-bold': ['var(--font-gilroy-bold)'],
				inter: ['var(--font-inter)'],
			},
			borderRadius: {
				lg: '35px',
				md: '20px',
				sm: '16px',
				full: '9999px',
			},
			keyframes: {
				'accordion-down': {
					from: { opacity: '0', height: '0' },
					to: { opacity: '1', height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { opacity: '1', height: 'var(--radix-accordion-content-height)' },
					to: { opacity: '0', height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate'), plugin()],
} satisfies Config

export default config
