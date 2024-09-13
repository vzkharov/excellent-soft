import type { Config } from 'tailwindcss'

const _padding = '1rem'

const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		/** @fix ?? */
		container: {
			center: true,
			padding: _padding,
			screens: {
				'2xl': `calc(1128px + ${_padding})`,
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
				xs: '14px',
				sm: '16px',
				md: '20px',
				lg: '24px',
				xl: '32px',
				'2xl': '48px',
				'3xl': '64px',
				'4xl': '96px',
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
