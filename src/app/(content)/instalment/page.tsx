import { tv } from 'tailwind-variants'

import type { Page } from '~/lib/types'

import { Title } from '~/components/ui/text'
import { Section } from '~/components/section'

import InstallmentMarkdown from '~/markdown/instalment.mdx'

const InstalmentPage: Page = () => (
	<>
		<Section
			as="div"
			bg={styles.titleBg()}
			className={styles.title()}
		>
			<Title
				as="h2"
				font="bebas"
				gradient
			>
				Мы идем вам на встречу
			</Title>
		</Section>
		<Section
			bg={styles.infoBg()}
			className={styles.infoSection()}
		>
			<div className={styles.infoContent()}>
				<InstallmentMarkdown />
			</div>
		</Section>
	</>
)

const styles = tv({
	slots: {
		title: '',
		titleBg: 'relative bg-gray-100 pb-6 pt-12 before:absolute before:bg-gray-100 before:bottom-0 before:inset-x-0 before:h-screen before:-z-10',
		infoBg: 'bg-gradient-to-r from-gray-200 to-gray-100 py-10',
		infoContent: 'flex max-w-prose flex-col gap-y-6',
		infoSection: 'rounded-lg bg-gradient-to-r from-background/10 to-gray-200 p-10 text-background',
	},
})()

export default InstalmentPage
