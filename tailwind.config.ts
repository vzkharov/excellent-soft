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
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				border: 'hsl(var(--border))',

				primary: 'hsl(var(--primary))',
				secondary: 'hsl(var(--secondary))',

				dark: 'hsl(var(--dark))',
				gray: {
					100: 'hsl(var(--gray-100))',
					200: 'hsl(var(--gray-200))',
					300: 'hsl(var(--gray-300))',

					700: 'hsl(var(--gray-700))',
					800: 'hsl(var(--gray-800))',
					900: 'hsl(var(--gray-900))',
				},
				white: 'hsl(var(--white))',

				'gradient-start': 'hsl(var(--gradient-start))',
				'gradient-end': 'hsl(var(--gradient-end))',
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
