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
