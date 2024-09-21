type Card = {
	id: string
	title: string
	cover: string

	actionText: string
	description: string
}

const cardsConfig = {
	landing: {
		id: 'landing',
		title: 'Лендинг',
		cover: '/development-cards/landing.png',

		actionText: 'Узнать цену',
		description:
			'Одностраничный сайт с целью продвижения продуктов и услуг. Яркий и захватывающий, с четким призывом к нужному действию и высокой конверсией.',
	},
	corporate: {
		id: 'corporate',
		title: 'Корпоративный сайт',
		cover: '/development-cards/corporate.png',

		actionText: 'Задать вопрос',
		description:
			'Сегодня корпоративный сайт — это бизнес-инструмент, с помощью которого вы будете привлекать новых клиентов, а также информировать существующих.',
	},
	portal: {
		id: 'portal',
		title: 'Портал',
		cover: '/development-cards/portal.png',

		actionText: 'Спросить у разработчика',
		description:
			'Информационные, образовательные, корпоративные порталы— такие ресурсы предоставляют пользователям различные сервисы в рамках одного веб-сайта.',
	},
	service: {
		id: 'service',
		title: 'Сервисы',
		cover: '/development-cards/service.png',

		actionText: 'Оставить заявку',
		description:
			'Сервис организовывает взаимодействие между сайтами, поэтому технически требует большего внимания при разработке.',
	},
} satisfies Record<string, Card>

type Feature = {
	id: string
	title: string
	icon: string
}

const featuresConfig = [
	{
		id: 'chat-bot',
		title: 'Чат-боты',
		icon: '/icons/chat.svg',
	},
	{
		id: 'ai',
		title: 'Внедрение AI',
		icon: '/icons/ai.svg',
	},
	{
		id: 'voice',
		title: 'Голосовой интерфейс',
		icon: '/icons/microphone.svg',
	},
	{
		id: 'inquiry',
		title: 'По запросу',
		icon: '/icons/smile.svg',
	},
] satisfies Feature[]

type Job = {
	id: string
	title: string
	description: string

	minDate: string
}

const jobsConfig = [
	{
		id: 'promo',
		title: 'промо \n страницы',
		description: 'Отличный инструмент для быстрого старта продаж и тестирования рынка',
		minDate: 'от 5 дней',
	},
	{
		id: 'corporate',
		title: 'Корпоративные сайты',
		description: 'Вся информация о деятельности компании для клиентов',
		minDate: 'от 3 недель',
	},
	{
		id: 'marketplace',
		title: 'Интернет магазины',
		description: 'Лучший способ как для розничных магазинов, так и для оптовых продаж',
		minDate: 'от 5 недель',
	},
	{
		id: 'web-service',
		title: 'веб \n сервисы',
		description: 'Которые способны выстоять даже в высококонкурентных нишах',
		minDate: 'от 8 недель',
	},
] satisfies Job[]

export { jobsConfig, cardsConfig, featuresConfig }
