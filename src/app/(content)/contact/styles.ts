import { tv } from 'tailwind-variants'

export const styles = tv({
	slots: {
		page: 'min-h-[80vh] flex items-center px-0',
		inner: 'w-full pt-8 md:pb-16 flex justify-between flex-col md:flex-row gap-y-4',

		card: 'relative overflow-hidden max-w-4xl flex-1 md:rounded-lg bg-gray-200 px-6 py-8 md:px-10 md:py-14 text-white backdrop-blur-xl [&>*]:max-w-sm',

		phone: [
			'h-fit self-end justify-self-end cursor-pointer',
			'rounded-full bg-black px-5 py-3 font-gilroy-bold text-white max-md:hidden',
		],

		bgImage: 'h-full w-auto -z-10 select-none !max-w-none opacity-50',
	},
})()
