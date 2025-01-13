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
			color="black"
			bg={styles.titleBg()}
			className={styles.title()}
		>
			<Title as="h2">
				Предоставляем{' '}
				<span className="bg-black text-primary max-sm:leading-[3rem]">
					собственную рассрочку
				</span>
			</Title>
		</Section>

		<Section
			color="black"
			bg={styles.info()}
		>
			<div className={styles.infoContent()}>
				<PaymentMarkdown />
				<Spacer y="xl" />
				<FeedButton
					bold
					variant="secondary"
				/>
			</div>
		</Section>

		<Footer />
	</>
)

export const metadata = createMetadata(navigation.payment)

export default PaymentPage
