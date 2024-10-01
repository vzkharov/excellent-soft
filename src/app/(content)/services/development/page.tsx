import type { Page } from '~/lib/types'
import { createMetadata } from '~/lib/metadata'

import { navigation } from '~/config/navigation'

import { Footer } from '~/components/footer'
import { Section } from '~/components/(sections)'
import { DevelopmentCarousel } from '~/modules/development-carousel'

import { ServiceMain } from '../_components/service-main'

import { tabs, features, techStack } from './_data'
import { FeedSection } from '~/components/(sections)/feed-section'
import { ServiceAccordion, ServiceAccordionItem } from '../_components/service-accordion'
import { Title } from '~/components/ui/text'
import { Spacer } from '~/components/ui/spacer'
import { ServiceTechnology } from '../_components/service-technology'
import SmmMarkdown from '~/markdown/services/development/smm.mdx'

const title = 'Все виды сайтов. \n Любой сложности. \n «Под ключ»'

const ServiceDevelopmentPage: Page = () => (
	<>
		<Section>
			<ServiceMain
				tabs={tabs}
				title={title}
				features={features}
			/>
		</Section>
		<Section>
			<DevelopmentCarousel />
		</Section>
		<FeedSection />
		<Section>
			<Title as="h2">Что мы предлагаем?</Title>

			<Spacer y="xl" />

			<ServiceAccordion defaultValue={[tabs[0]?.id || '']}>
				{tabs.map((tab) => (
					<ServiceAccordionItem
						key={tab.id}
						value={tab.id}
						title={tab.title}
					>
						{tab.markdown}
					</ServiceAccordionItem>
				))}
			</ServiceAccordion>
		</Section>
		<FeedSection />
		<Section>
			<ServiceTechnology techStack={techStack} />
		</Section>

		<Section>
			<SmmMarkdown />
		</Section>

		<Footer />
	</>
)

export const metadata = createMetadata(navigation.development)

export default ServiceDevelopmentPage
