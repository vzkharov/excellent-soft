import { tv } from 'tailwind-variants'

import type { Page } from '~/lib/types'

import { Card } from '~/components/ui/card'
import { Title } from '~/components/ui/text'
import { Spacer } from '~/components/ui/spacer'
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'

import { Section } from '~/components/(sections)'
import { DevelopmentCarousel } from '~/modules/development-carousel'

const ServiceDevelopmentPage: Page = () => (
	<>
		<Section>
			<Tabs defaultValue="eco">
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
				Все виды сайтов. <br /> Любой сложности. <br /> «Под ключ»
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
			<DevelopmentCarousel />
		</Section>
	</>
)

const features = [
	{
		title: 'Веб сайты',
		description:
			'Процесс разработки сайта включает в себя несколько ключевых этапов. Мы используем экспертные разработки, тщательное тестирование и плавную интеграцию функций для обеспечения постоянного обслуживания и стабильную работу веб-сайта, а также удовлетворенность пользователей.',
	},
	{
		title: 'Веб приложения',
		description:
			'Предоставление индивидуальных решений, сочетающих интуитивно понятные пользовательские интерфейсы с надежными серверными системами. Мы создаем интерактивные и масштабируемые приложения, которые улучшают взаимодействие с пользователем, повышают операционную эффективность и способствуют росту бизнеса.',
	},
] as const

const items = [
	{
		id: 'eco',
		title: 'Экономичные решения',
		markdown: null,
	},
	{
		id: 'b2b',
		title: 'B2B сайты',
		markdown: null,
	},
	{
		id: 'ecommerce',
		title: 'Интернет-магазины',
		markdown: null,
	},
	{
		id: 'chat-bot',
		title: 'Чат-боты',
		markdown: null,
	},
	{
		id: 'voice',
		title: 'Голосовой интерфейс',
		markdown: null,
	},
	{
		id: 'tech',
		title: 'Наши технологии',
		markdown: null,
	},
	{
		id: 'smm',
		title: 'Процесс разработки',
		markdown: null,
	},
] as const

const styles = tv({
	slots: {
		title: '',
	},
})()

export default ServiceDevelopmentPage
