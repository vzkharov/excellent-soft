import { tv } from 'tailwind-variants'

import { Section } from '~/components/section'
import { ContactButton } from '~/components/(buttons)/contact-button'

const FeedSection = () => (
	<Section
		bg={styles.bg()}
		className={styles.container()}
	>
		<ContactButton
			bold
			size="lg"
			variant="outlined"
		>
			Давайте обсудим ваш проект
		</ContactButton>
	</Section>
)

const styles = tv({
	slots: {
		bg: 'bg-gradient-to-r from-gradient-start to-gradient-end',
		container: 'flex items-center justify-center p-9',
	},
})()

export { FeedSection }
