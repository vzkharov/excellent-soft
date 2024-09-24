import { tv } from 'tailwind-variants'

import type { Page } from '~/lib/types'
import { createMetadata } from '~/lib/metadata'

import { navigation } from '~/config/navigation'

import { Title } from '~/components/ui/text'
import { Spacer } from '~/components/ui/spacer/spacer'
import { Section } from '~/components/(sections)'
import { FeedButton } from '~/components/(buttons)/feed-button'

import PaymentMarkdown from '~/markdown/payment.mdx'

const PaymentPage: Page = () => (
	<>
		<Section
			as="div"
			color="dark"
			bg={styles.titleBg()}
			className={styles.title()}
		>
			<Title
				as="h2"
				gradient
			>
				Мы идем вам на встречу
			</Title>
		</Section>

		<Section
			color="dark"
			bg={styles.info()}
			className={styles.infoContent()}
		>
			<PaymentMarkdown />
			<Spacer y="xl" />
			<FeedButton
				bold
				variant="shadow"
			/>
		</Section>
	</>
)

const styles = tv({
	slots: {
		title: 'pt-12 pb-6',
		titleBg: 'relative before:absolute before:bg-gray-100 before:bottom-0 before:inset-x-0 before:h-screen before:-z-10',

		info: 'pt-6 md:pb-24',
		infoContent:
			'md:rounded-lg bg-gradient-to-r from-background/10 to-gray-200 p-6 md:p-10 text-background',
	},
})()

export const metadata = createMetadata(navigation.payment)

export default PaymentPage
