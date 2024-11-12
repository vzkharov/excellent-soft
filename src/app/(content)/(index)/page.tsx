import type { Page } from '~/lib/types'

import { Footer } from '~/components/footer'
import { Section } from '~/components/(sections)'
import { FeedSection } from '~/components/(sections)/feed-section'

import { FaqSection } from '~/modules/faq-section'
import { PartnerSection } from '~/modules/partners'
import { ProjectSection } from '~/modules/project-section'

import { WelcomeSection } from './_sections/welcome-section'
import { ProcessSection } from './_sections/process-section'
import { DevelopmentSection } from './_sections/development-section'

import { styles } from './styles'

const HomePage: Page = () => (
	<>
		<Section className={styles.section()}>
			<WelcomeSection />
		</Section>

		<Section color="brand" />

		<Section
			color="dark"
			className={styles.container()}
		>
			<DevelopmentSection />
		</Section>

		<Section
			color="dark"
			className={styles.container()}
		>
			<ProcessSection />
		</Section>

		<PartnerSection />

		<FeedSection />

		<ProjectSection
			withTitle
			color="white"
		/>

		<Section color="brand" />

		<FaqSection color="metal" />

		<Footer />
	</>
)

export default HomePage
