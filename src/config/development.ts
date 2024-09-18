import type { Development } from '~/entities/development'

const developmentCardsConfig = {
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
} satisfies Record<string, Development>

export { developmentCardsConfig }
