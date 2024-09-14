import { tv } from 'tailwind-variants'

import {
	Dialog,
	DialogTitle,
	DialogHeader,
	DialogTrigger,
	DialogContent,
	DialogDescription,
} from '~/components/ui/dialog'

import { Section } from '~/components/section'

/** @fix with button */
const FeedSection = () => (
	<Section
		bg={styles.bg()}
		className={styles.container()}
	>
		<Dialog>
			<DialogTrigger className={styles.trigger()}>Давайте обсудим ваш проект</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Свяжитесь с нами</DialogTitle>
					<DialogDescription>Described By</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	</Section>
)

const styles = tv({
	slots: {
		bg: 'bg-gradient-to-r from-gradient-start to-gradient-end',
		container: 'flex items-center justify-center p-9',
		trigger: 'group rounded-full font-gilroy-bold text-md border border-dark px-16 py-3 bg-transparent hover:bg-gray-0 text-gray-0 hover:text-gray-1',
	},
})()

export { FeedSection }
