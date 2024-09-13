type NavLinkConfig = {
	id: string
	href: string
	name: string
}

const appNavConfig = {
	index: {
		id: 'index',
		href: '/',
		name: 'Главная',
	},
	works: {
		id: 'works',
		href: '/works',
		name: 'Портфолио',
	},
	instalment: {
		id: 'instalment',
		href: '/instalment',
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
} satisfies Record<string, NavLinkConfig>

export { appNavConfig }
export type { NavLinkConfig }
