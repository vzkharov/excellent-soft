type PartnerConfig = {
	id: string
	title: string
	description: string
	href: string
}

const partnersConfig = [
	{
		id: 'b2c',
		title: 'B2С',
		description: 'Веб-сайты, приложения и порталы пишем на современных фреймворках',
		href: '/services/development#technologies',
	},
	{
		id: 'b2b',
		title: 'В2В сектор',
		description:
			'Каталоги с прайс - листами, онлайн сервисы для общения с клиентами, личные B2B кабинеты...',
		href: '/services/development#b2b',
	},
	{
		id: 'marketplace',
		title: 'ЕКОМ',
		description: 'Подберем эффективные технологии под ваш бизнес',
		href: '/services/development#ecommerce',
	},
	{
		id: 'startup',
		title: 'Стартапы',
		description: 'Полный спектр услуг по запуску MVP для любого веб-стартапа',
		href: '/services/design#mvp',
	},
	{
		id: 'web3',
		title: 'WEB 3.0',
		description: 'UX/UI услуги для Web 3.0 блокчейн-проектов, DEFI  платформ и цифровых кошельков ',
		href: '/web_3',
	},
] satisfies PartnerConfig[]

export { partnersConfig }
