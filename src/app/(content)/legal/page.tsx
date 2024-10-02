import { styles } from './styles'

import type { Page } from '~/lib/types'

import { Title } from '~/components/ui/text'
import { Spacer } from '~/components/ui/spacer/spacer'

import { Footer } from '~/components/footer'
import { Section } from '~/components/(sections)'

import { ContentSection } from './_sections/content-section'
import { DescriptionSection } from './_sections/description-section'

const LegalPage: Page = () => (
	<>
		<Section className={styles.title()}>
			<Title as="h2">
				ПОЛИТИКА <br />
				КОНФИДЕНЦИАЛЬНОСТИ
			</Title>
		</Section>

		<Spacer y="3xl" />

		<Section className={styles.section()}>
			<ContentSection />
			<DescriptionSection />
		</Section>

		<Footer />
	</>
)

export default LegalPage
