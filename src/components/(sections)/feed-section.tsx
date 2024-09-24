import { tv } from 'tailwind-variants'

import { Section } from '~/components/(sections)'
import { ContactButton } from '~/components/(buttons)/contact-button'

const FeedSection = () => (
	<Section
		color="brand"
		className={styles.container()}
	>
		<ContactButton
			bold
			size="lg"
			variant="outlined"
			className={styles.button()}
		>
			Давайте обсудим ваш проект
		</ContactButton>
	</Section>
)

const styles = tv({
	slots: {
		container: 'flex items-center justify-center py-9',
		button: 'max-md:w-full max-md:px-0',
	},
})()

export { FeedSection }
