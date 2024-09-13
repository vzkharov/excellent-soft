import type { Config } from 'tailwindcss'

const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		/** @fix ?? */
		container: {
			center: true,
			padding: '0rem',
			screens: {
				'2xl': '1280px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',

				muted: 'hsl(var(--muted))',
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: 'hsl(var(--card))',

				// valid
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',

				primary: 'hsl(var(--primary))',
				secondary: 'hsl(var(--secondary))',
				accent: 'hsl(var(--accent))',

				content: {
					0: 'hsl(var(--content-0))',
					100: 'hsl(var(--content-100))',
					200: 'hsl(var(--content-200))',
					300: 'hsl(var(--content-300))',

					700: 'hsl(var(--content-700))',
					800: 'hsl(var(--content-800))',
					900: 'hsl(var(--content-900))',
					1: 'hsl(var(--content-1))',
				},

				'gradient-start': 'hsl(var(--gradient-start))',
				'gradient-end': 'hsl(var(--gradient-end))',
			},
			fontSize: {
				xs: '12px',
				sm: '16px',
				md: '20px',
				lg: '24px',
				xl: '32px',
				'2xl': '48px',
				'3xl': '64px',
				'4xl': '96px',
			},
			maxWidth: {
				prose: '80ch',
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
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
