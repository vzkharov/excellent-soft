import type { Page } from '~/lib/types'
import { createMetadata } from '~/lib/metadata'

import { navigation } from '~/config/navigation'

import { Section } from '~/components/(sections)'
import { FeedSection } from '~/components/(sections)/feed-section'

import { DesignCarousel } from '~/modules/design-carousel'

import { ServiceMain } from '../_components/service-main'

import { tabs, features } from './_data'

import DesignProcess from '~/markdown/services/design/design-process.mdx'
import Audit from '~/markdown/services/design/audit.mdx'
import DesignMVP from '~/markdown/services/design/design-mvp.mdx'

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

		<FeedSection />

		<Section id={tabs[0]?.id}>
			<DesignProcess />
		</Section>

		<FeedSection />

		<Section id={tabs[1]?.id}>
			<Audit />
		</Section>

		<FeedSection />
		<Section id={tabs[2]?.id}>
			<DesignMVP />
		</Section>
	</>
)

export const metadata = createMetadata(navigation.design)

export default ServiceDesignPage
