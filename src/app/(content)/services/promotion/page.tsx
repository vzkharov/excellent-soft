import type { Page } from '~/lib/types'
import { createMetadata } from '~/lib/metadata'

import { navigation } from '~/config/navigation'

import { Title } from '~/components/ui/text'
import { Spacer } from '~/components/ui/spacer'

import { Footer } from '~/components/footer'
import { Section } from '~/components/(sections)'

import { ServiceMain } from '../_components/service-main'
import { ServiceAccordion, ServiceAccordionItem } from '../_components/service-accordion'

import { tabs, features } from './_data'

const title = 'Эффективные маркетинговые стратегии. Мы \n адаптируем наш подход к вашим \n потребностям'

const ServicePromotionPage: Page = () => (
	<>
		<Section>
			<ServiceMain
				tabs={tabs}
				title={title}
				features={features}
			/>
		</Section>

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

		<Footer />
	</>
)

export const metadata = createMetadata(navigation.promotion)

export default ServicePromotionPage
