import type { Page } from '~/lib/types'
import { createMetadata } from '~/lib/metadata'

import { navigation } from '~/config/navigation'

import { Footer } from '~/components/footer'
import { Section } from '~/components/(sections)'
import { FeedSection } from '~/components/(sections)/feed-section'

import { DesignCarousel } from '~/modules/design-carousel'

import { ServiceMain } from '../_components/service-main'

import { tabs, features } from './_data'

import { Spacer } from '~/components/ui/spacer'

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
		<Spacer y="3xl" />
		<FeedSection />
		<Spacer y="3xl" />
		<Section>
			<DesignCarousel />
		</Section>

		<Section>
			<DesignProcess />
		</Section>
		<Spacer y="3xl" />
		<FeedSection />

		<Section>
			<Audit />
		</Section>
		<Spacer y="3xl" />
		<FeedSection />
		<Section>
			<DesignMVP />
		</Section>
		<Footer />
	</>
)

export const metadata = createMetadata(navigation.design)

export default ServiceDesignPage
