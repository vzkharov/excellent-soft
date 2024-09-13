import { tv } from 'tailwind-variants'

import type { Page } from '~/lib/types'

import { Title } from '~/components/ui/text'

import { Section } from '~/components/section'

const ContactPage: Page = () => (
	<Section className={styles.title()}>
		<Title as="h2">Контакты</Title>
	</Section>
)

const styles = tv({
	slots: {
		title: 'min-h-screen pb-6 pt-12',
	},
})()

export default ContactPage
