type NavigationLinkConfig = {
	id: string
	href: string
	name: string
}

const navigation = {
	index: {
		id: 'index',
		href: '/',
		name: 'Главная',
	},
	works: {
		id: 'project',
		href: '/projects',
		name: 'Портфолио',
	},
	payment: {
		id: 'payment',
		href: '/payment',
		name: 'В рассрочку',
	},
	contact: {
		id: 'contact',
		href: '/contact',
		name: 'Контакты',
	},
	services: {
		id: 'services',
		href: '/services',
		name: 'Услуги',
	},
	design: {
		id: 'design',
		href: '/services/design',
		name: 'Дизайн',
	},
	development: {
		id: 'development',
		href: '/services/development',
		name: 'Веб-разработка',
	},
	promotion: {
		id: 'promotion',
		href: '/services/promotion',
		name: 'Продвижение',
	},
} satisfies Record<string, NavigationLinkConfig>

export { navigation }
export type { NavigationLinkConfig }
