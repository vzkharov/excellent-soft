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

const FeedSection = () => (
	<Section
		bg={styles.bg()}
		className={styles.container()}
	>
		<Dialog>
			<DialogTrigger className={styles.button()}>Давайте обсудим ваш проект</DialogTrigger>
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
		button: 'rounded-full border font-gilroy-bold text-md border-foreground px-16 py-3 bg-background hover:bg-content-0 hover:bg-gradient-to-r hover:from-gradient-start hover:to-gradient-end hover:text-transparent hover:bg-clip-text',
	},
})()

export { FeedSection }
