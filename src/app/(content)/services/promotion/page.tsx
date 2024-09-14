import { tv } from 'tailwind-variants'

import type { Page } from '~/lib/types'

import { Card } from '~/components/ui/card'
import { Title } from '~/components/ui/text'
import { Spacer } from '~/components/ui/spacer'
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion'

import { Section } from '~/components/section'
import { FeedButton } from '~/components/(buttons)/feed-button'

import SeoMarkdown from '~/markdown/works/promotion/seo.mdx'
import SmmMarkdown from '~/markdown/works/promotion/smm.mdx'
import TargetMarkdown from '~/markdown/works/promotion/target.mdx'

const ServicePromotionPage: Page = () => (
	<>
		<Section>
			<Tabs defaultValue="seo">
				<TabsList>
					{items.map((tab) => (
						<TabsTrigger
							key={tab.id}
							value={tab.id}
						>
							{tab.title}
						</TabsTrigger>
					))}
				</TabsList>
			</Tabs>

			<Spacer y="4rem" />

			<Title
				as="h2"
				className={styles.title()}
			>
				Эффективные маркетинговые стратегии. Мы <br /> адаптируем наш подход к вашим <br />
				потребностям
			</Title>

			<Spacer y="2rem" />

			<section className="grid grid-cols-2 gap-6">
				{features.map((feature, idx) => (
					<Card
						key={idx}
						title={feature.title}
						description={feature.description}
						size="md"
						variant="outlined"
					/>
				))}
			</section>
		</Section>

		<Section>
			<Title
				as="h2"
				className={styles.title()}
			>
				Что мы предлагаем?
			</Title>

			<Spacer y="2rem" />

			<Accordion
				type="multiple"
				className="space-y-2"
			>
				{items.map((item) => (
					<AccordionItem
						key={item.id}
						id={item.id}
						value={item.id}
					>
						<AccordionTrigger>{item.title}</AccordionTrigger>
						<AccordionContent>
							{item.markdown}
							<Spacer y="2rem" />
							<FeedButton />
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</Section>
	</>
)

const features = [
	{
		title: 'SEO',
		description: 'Эффективная базовая SEO-настройка нового сайта может быстро начать приносить плоды.',
	},
	{
		title: 'Копирайт',
		description:
			'Мы пишем привлекательный и беглый текстовый текст любым голосом и стилем, соответствующим вашему бренду.',
	},
	{
		title: 'Контекстная реклама',
		description:
			'Позволяет вашему бизнесу появляться в результатах поиска или на веб-страницах, где ваша целевая аудитория уже ищет информацию, связанную с вашими товарами или услугами.',
	},
	{
		title: 'SMM',
		description:
			'Направляем пользователей из социальных сетей на ваш веб-сайт, что может способствовать росту продаж или получению заявок.',
	},
] as const

const items = [
	{
		id: 'seo',
		title: 'Настройка SEO',
		markdown: <SeoMarkdown />,
	},
	{
		id: 'target',
		title: 'Контекстная реклама',
		markdown: <TargetMarkdown />,
	},
	{
		id: 'smm',
		title: 'SMM',
		markdown: <SmmMarkdown />,
	},
] as const

const styles = tv({
	slots: {
		title: '',
	},
})()

export default ServicePromotionPage
