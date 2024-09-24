type NavigationLinkConfig = {
	id: string
	href: string
	name: string
	description?: string
}

const navigation = {
	index: {
		id: 'index',
		href: '/',
		name: 'Главная',
		description: '',
	},
	projects: {
		id: 'project',
		href: '/projects',
		name: 'Портфолио',
		description:
			'Ознакомьтесь с нашим разнообразным портфолио, в котором представлен ряд успешных проектов. От инновационных веб-приложений до привлекательного дизайна - узнайте, как мы помогаем клиентам достигать их целей в области цифровых технологий.',
	},
	payment: {
		id: 'payment',
		href: '/payment',
		name: 'В рассрочку',
		description:
			'Выбирайте из множества вариантов оплаты и будьте спокойны благодаря нашим надежным мерам безопасности.',
	},
	contact: {
		id: 'contact',
		href: '/contact',
		name: 'Контакты',
		description:
			'Свяжитесь с нами! Если у вас есть вопросы, вам нужна поддержка или вы хотите обсудить проект, наша команда всегда готова помочь. Заполните форму или свяжитесь с нами по нашим контактным данным.',
	},
	services: {
		id: 'services',
		href: '/services',
		name: 'Услуги',
		description:
			'Откройте для себя комплекс услуг, которые мы предлагаем: дизайн, разработку и продвижение. Узнайте, как наш опыт может повысить популярность вашего бренда и предложить эффективные цифровые решения.',
	},
	design: {
		id: 'design',
		href: '/services/design',
		name: 'Дизайн',
		description:
			'Наша команда создает потрясающие с визуальной точки зрения и удобные для пользователя дизайны, которые отражают суть вашего бренда. От макетов до высококачественных макетов мы создаем привлекательный пользовательский опыт с учетом потребностей вашей аудитории.',
	},
	development: {
		id: 'development',
		href: '/services/development',
		name: 'Веб-разработка',
		description:
			'Мы создаем надежные, масштабируемые и безопасные веб-сайты и приложения с использованием современных технологий. Наши решения оптимизированы по производительности и обеспечивают бесперебойную работу на всех устройствах.',
	},
	promotion: {
		id: 'promotion',
		href: '/services/promotion',
		name: 'Продвижение',
		description:
			'Boost your online presence with our comprehensive digital marketing strategies. We focus on SEO, social media, and content marketing to drive traffic and increase conversions.',
	},
} satisfies Record<string, NavigationLinkConfig>

export { navigation }
export type { NavigationLinkConfig }
