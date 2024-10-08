import { tv } from 'tailwind-variants'

export const styles = tv({
	slots: {
		title: 'pb-6 pt-12',
		section: 'flex flex-row pb-24 gap-20',
		toc: 'hidden !w-80 lg:block',
		inner: 'flex-1',
	},
})()
