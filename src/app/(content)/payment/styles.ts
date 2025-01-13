import { tv } from 'tailwind-variants'

export const styles = tv({
	slots: {
		title: 'pt-12 pb-6 mx-auto px-4',
		titleBg: 'relative before:absolute before:bg-black before:bottom-0 before:inset-x-0 before:h-screen before:-z-10',

		info: 'pt-6 md:pb-24 ',
		infoContent: 'md:rounded-lg bg-white/20 p-6 md:p-10 text-background',
	},
})()
