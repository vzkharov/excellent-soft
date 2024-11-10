import { tv } from 'tailwind-variants'

export const styles = tv({
	slots: {
		title: '',
		img: 'h-[343px] md:h-[550px]',
		link: 'mx-auto flex aspect-square h-64 w-64 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-gradient-start to-gradient-end font-gilroy-bold text-md !text-dark hover:from-primary hover:to-primary focus:from-primary focus:to-primary',
	},
})()
