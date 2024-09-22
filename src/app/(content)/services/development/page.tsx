import type { Page } from '~/lib/types'

import { Section } from '~/components/(sections)'
import { DevelopmentCarousel } from '~/modules/development-carousel'

import { ServiceMain } from '../_components/service-main'

import { tabs, features } from './_data'

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
	</>
)

export default ServiceDevelopmentPage
