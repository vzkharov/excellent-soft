import { tv } from 'tailwind-variants'

import type { Page } from '~/lib/types'

import { Section } from '~/components/(sections)'
import { FeedSection } from '~/components/(sections)/feed-section'
import { DesignCarousel } from '~/modules/design-carousel'

import DesignProcess from '~/markdown/services/design/design-process.mdx'

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

		<Section id="process">
			{/** @todo */}
			<DesignProcess />
		</Section>

		<FeedSection />

		<Section id="ux">
			{/** @todo */}
			<DesignProcess />
		</Section>

		<FeedSection />

		<Section id="mvp">
			{/** @todo */}
			<DesignProcess />
		</Section>
	</>
)

const styles = tv({
	slots: {
		title: '',
	},
})()

export default ServiceDesignPage
