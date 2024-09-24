import type { Page } from '~/lib/types'
import { createMetadata } from '~/lib/metadata'

import { navigation } from '~/config/navigation'

import { Title } from '~/components/ui/text'
import { Spacer } from '~/components/ui/spacer/spacer'

import { Footer } from '~/components/footer'
import { Section } from '~/components/(sections)'
import { FeedButton } from '~/components/(buttons)/feed-button'

import PaymentMarkdown from '~/markdown/payment.mdx'

import { styles } from './styles'

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

		<Footer />
	</>
)

export const metadata = createMetadata(navigation.payment)

export default PaymentPage
