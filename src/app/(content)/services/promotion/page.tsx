import type { Page } from '~/lib/types'

import { Title } from '~/components/ui/text'
import { Spacer } from '~/components/ui/spacer'

import {
	Accordion,
	AccordionCloseIcon,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '~/components/ui/accordion'

import { Section } from '~/components/(sections)'
import { FeedButton } from '~/components/(buttons)/feed-button'

import { ServiceMain } from '../_components/service-main'

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

			<Spacer y="2rem" />

			<Accordion
				type="multiple"
				className="space-y-2"
				defaultValue={['seo']}
			>
				{tabs.map((tab) => (
					<AccordionItem
						key={tab.id}
						id={tab.id}
						value={tab.id}
					>
						<AccordionTrigger className="max-md:px-6">
							<span className="translate-y-1.5">{tab.title}</span>
							<AccordionCloseIcon />
						</AccordionTrigger>
						<AccordionContent className="max-md:px-6">
							{tab.markdown}
							<Spacer y="2rem" />
							<FeedButton
								bold
								variant="outlined"
							/>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</Section>
	</>
)

export default ServicePromotionPage
