import { tv } from 'tailwind-variants'

import type { Page } from '~/lib/types'

import { Title } from '~/components/ui/text'
import { Section } from '~/components/(sections)'
import { FeedButton } from '~/components/(buttons)/feed-button'

import InstallmentMarkdown from '~/markdown/instalment.mdx'

const InstalmentPage: Page = () => (
	<>
		<Section
			as="div"
			color="dark"
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
			color="dark"
			bg={styles.info()}
			className={styles.infoSection()}
		>
			<div className={styles.infoContent()}>
				<InstallmentMarkdown />
				<FeedButton
					bold
					variant="shadow"
				/>
			</div>
		</Section>
	</>
)

const styles = tv({
	slots: {
		title: 'pt-12 pb-6',
		titleBg: 'relative before:absolute before:bg-gray-100 before:bottom-0 before:inset-x-0 before:h-screen before:-z-10',

		info: 'pt-6 md:pb-24',
		infoSection:
			'md:rounded-lg bg-gradient-to-r from-background/10 to-gray-200 p-6 md:p-10 text-background',
		infoContent: 'flex max-w-prose flex-col gap-y-6',
	},
})()

export default InstalmentPage
