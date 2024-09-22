import plugin from 'tailwindcss/plugin'

const _plugin = () =>
	plugin(({ addUtilities }) => {
		addUtilities({
			'.w-unset': {
				width: 'unset',
			},
			'.h-unset': {
				height: 'unset',
			},
			'.line-clamp-none': {
				'-webkit-line-clamp': 'unset',
			},

			'.flex-center': {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			},

			// @fix
			'.bg-glass': {
				backdropFilter: 'blur(16px)',
				backgroundColor: 'rgb(30 30 36 / 0.5)',
			},
			// @fix
			'.bg-overlay': {
				backgroundColor: 'rgb(140 140 180 / 0.15)',
			},

			'.text-gradient': {
				color: 'transparent',
				backgroundClip: 'text',
				WebkitBackgroundClip: 'text',
				WebkitTextFillColor: 'transparent',
				backgroundImage: `linear-gradient(to right, hsl(var(--gradient-start)) 0%, hsl(var(--gradient-end)) 100%)`,
			},

			'.bg-gradient-brand': {
				backgroundImage: `linear-gradient(to right, hsl(var(--gradient-start)) 0%, hsl(var(--gradient-end)) 100%)`,
			},
		})
	})

export default _plugin
