import type { Page } from '~/lib/types'

import { Section } from '~/components/(sections)'
import { FeedSection } from '~/components/(sections)/feed-section'

import { FaqSection } from '~/modules/faq-section'
import { PartnerSection } from '~/modules/partners'
import { ProjectSection } from '~/modules/project-section'

import { WelcomeSection } from './_sections/welcome-section'
import { ProcessSection } from './_sections/process-section'
import { DevelopmentSection } from './_sections/development-section'

const HomePage: Page = () => (
	<>
		<WelcomeSection className="pb-40 pt-24 text-white" />

		<Section color="brand" />

		<DevelopmentSection className="pb-20 pt-24" />

		<Section
			color="dark"
			className="overflow-x-visible pb-20 pt-24"
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
	</>
)

export default HomePage
