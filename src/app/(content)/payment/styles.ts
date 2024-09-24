import { tv } from 'tailwind-variants'

export const styles = tv({
	slots: {
		title: 'pt-12 pb-6',
		titleBg: 'relative before:absolute before:bg-gray-100 before:bottom-0 before:inset-x-0 before:h-screen before:-z-10',

		info: 'pt-6 md:pb-24',
		infoContent:
			'md:rounded-lg bg-gradient-to-r from-background/10 to-gray-200 p-6 md:p-10 text-background',
	},
})()
