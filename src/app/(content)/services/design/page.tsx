import type { Page } from '~/lib/types'
import { createMetadata } from '~/lib/metadata'

import { navigation } from '~/config/navigation'

import { Section } from '~/components/(sections)'
import { FeedSection } from '~/components/(sections)/feed-section'

import { DesignCarousel } from '~/modules/design-carousel'

import { ServiceMain } from '../_components/service-main'

import { tabs, features } from './_data'

const title = 'Проектирование продукта \n под запросы вашего бизнеса'

const ServiceDesignPage: Page = () => (
	<>
		<Section>
			<ServiceMain
				tabs={tabs}
				title={title}
				features={features}
			/>
		</Section>

		<FeedSection />

		<Section>
			<DesignCarousel />
		</Section>
	</>
)

export const metadata = createMetadata(navigation.design)

export default ServiceDesignPage
