import { tv } from 'tailwind-variants'

import type { Page } from '~/lib/types'

import { Card } from '~/components/ui/card'
import { Title } from '~/components/ui/text'
import { Spacer } from '~/components/ui/spacer'
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'

import { Section } from '~/components/(sections)'
import { FeedSection } from '~/components/(sections)/feed-section'
import { DesignCarousel } from '~/modules/design-carousel'

const ServiceDesignPage: Page = () => (
	<>
		<Section>
			<Tabs defaultValue="design-process">
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
				Проектирование продукта <br /> под запросы вашего бизнеса
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

		<FeedSection />

		<Section>
			<DesignCarousel />
		</Section>
	</>
)

const features = [
	{
		title: 'Веб приложения',
		description:
			'Разрабатываем интуитивно понятные, безопасные и масштабируемые веб-приложения, которые способствуют росту и успеху вашего бизнеса. Мы заботимся о том, чтобы каждое приложение было полностью адаптировано к вашим уникальным требованиям.',
	},
	{
		title: 'CRM',
		description:
			'CRM-системы позволяют предприятиям строить и развивать прочные отношения с клиентами. Благодаря аналитике на основе данных и интуитивно понятным интерфейсам наши CRM-решения оптимизируют продажи, маркетинг и обслуживание клиентов',
	},
	{
		title: 'Дашборды',
		description:
			'Дашборды (панели мониторинга) обеспечивают полное наглядное представление ключевых показателей и данных вашего бизнеса. Благодаря удобным интерфейсам и аналитике в реальном времени мы создаем информационные панели, которые позволяют вам с легкостью принимать решения на основе данных.',
	},
	{
		title: 'Панель администратора',
		description:
			'Благодаря надежным функциям и настраиваемым настройкам наши панели администратора предоставляют вам полный контроль над управлением пользователями, управлением контентом, анализом данных и конфигурацией системы.',
	},
] as const

const items = [
	{
		id: 'design-process',
		title: 'Процесс проектирования сайта',
		markdown: null,
	},
	{
		id: 'ux',
		title: 'UX аудит/Редизайн',
		markdown: null,
	},
	{
		id: 'mvp',
		title: 'Проектирование MVP',
		markdown: null,
	},
	{
		id: 'graphic-design',
		title: 'Графический дизайн',
		markdown: null,
	},
	{
		id: 'identic',
		title: 'Айденитика',
		markdown: null,
	},
	{
		id: '3d-animation',
		title: '3D анимация',
		markdown: null,
	},
] as const

const styles = tv({
	slots: {
		title: '',
	},
})()

export default ServiceDesignPage
