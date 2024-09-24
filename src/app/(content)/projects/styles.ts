import { tv } from 'tailwind-variants'

export const styles = tv({
	slots: {
		title: 'pb-6 pt-12',
		filters: 'flex flex-col gap-y-5 py-2.5',
		filterFallback: 'h-11',
	},
})()
