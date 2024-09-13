import { tv } from 'tailwind-variants'

import type { Page } from '~/lib/types'

import { Title } from '~/components/ui/text'

import { Section } from '~/components/section'

const ServiceDevelopmentPage: Page = () => (
	<Section className={styles.title()}>
		<Title as="h2">Разработка</Title>
	</Section>
)

const styles = tv({
	slots: {
		title: 'min-h-screen pb-6 pt-12',
	},
})()

export default ServiceDevelopmentPage
