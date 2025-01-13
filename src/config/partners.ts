type PartnerConfig = {
	id: string
	title: string
	description: string
}

const partnersConfig = [
	{
		id: 'b2c',
		title: 'B2С',
		description: 'Веб-сайты, приложения и порталы пишем на современных фреймворках',
	},
	{
		id: 'b2b',
		title: 'В2В сектор',
		description:
			'Каталоги с прайс - листами, онлайн сервисы для общения с клиентами, личные B2B кабинеты...',
	},
	{
		id: 'marketplace',
		title: 'ЕКОМ',
		description: 'Подберем эффективные технологии под ваш бизнес',
	},
	{
		id: 'startup',
		title: 'Стартапы',
		description: 'Полный спектр услуг по запуску MVP для любого веб-стартапа',
	},
	{
		id: 'web3',
		title: 'WEB 3.0',
		description: 'UX/UI услуги для Web 3.0 блокчейн-проектов, DEFI  платформ и цифровых кошельков ',
	},
] satisfies PartnerConfig[]

export { partnersConfig }
