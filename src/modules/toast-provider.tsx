import { Toaster } from 'sonner'

import { tv } from 'tailwind-variants'

const ToastProvider = () => (
	<Toaster
		richColors
		position="bottom-center"
		toastOptions={{
			classNames: {
				default: styles.default(),
				title: styles.title(),
				icon: styles.icon(),
				description: styles.description(),
			},
		}}
	/>
)

const styles = tv({
	slots: {
		/**
		 * @description internal.width=356px; width=420px; offset-x=32px
		 */
		default: 'rounded-sm w-full sm:w-[420px] sm:-ml-8 px-6',
		title: 'font-gilroy-bold text-sm',
		icon: 'mr-2',
		description: 'font-gilroy text-sm sm:text-xs',
	},
})()

export { ToastProvider }
