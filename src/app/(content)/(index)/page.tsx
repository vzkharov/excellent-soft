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
import { Title } from '~/components/ui/text'

const HomePage: Page = () => (
	<>
		<Section className={styles.section()}>
			<WelcomeSection />
		</Section>

		<FeedSection christmas />

		<Section
			color="white"
			className={styles.container()}
		>
			<DevelopmentSection />
		</Section>

		<Section
			color="black"
			className={styles.container()}
		>
			<Title as="h2">
				этапы <span className="text-primary">разработки</span>
			</Title>
		</Section>

		<Section color="gray">
			<ProcessSection />
		</Section>

		<PartnerSection />

		<FeedSection />

		<ProjectSection
			withTitle
			color="white"
		/>

		{/* <Section color="primary" /> */}

		<FaqSection color="black" />

		<Footer />
	</>
)

export default HomePage
