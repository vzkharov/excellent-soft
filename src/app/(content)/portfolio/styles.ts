import { tv } from 'tailwind-variants'

export const styles = tv({
	slots: {
		title: 'pb-6 pt-12',
		filters: 'flex flex-col gap-y-5 py-2.5',
		link: 'mx-auto my-20 flex aspect-square h-64 w-64 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-gradient-start to-gradient-end font-gilroy-bold text-md !text-dark hover:from-primary hover:to-primary focus:from-primary focus:to-primary',
	},
})()
