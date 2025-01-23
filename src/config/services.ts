type ServiceConfig = {
	id: string
	href: string
	title: string
	description: string

	icon: string
}

const serviceConfig = {
	audit: {
		id: 'audit',
		href: '/services/design',
		title: 'UX аналитика и аудит',
		description: 'Анализ конкурентов и ЦА \n Стратегия \n Data-driven подход',
		icon: '/icons/ux.svg',
	},
	design: {
		id: 'design',
		href: '/services/design',
		title: 'Дизайн / Редизайн',
		description: 'UI/UX дизайн \n Графический дизайн \n Лого, фирменный стиль',
		icon: '/icons/design.svg',
	},
	development: {
		id: 'development',
		href: '/services/development',
		title: 'Разработка',
		description: 'Веб разработка \n Мобильная разработка \n Дизайн-система',
		icon: '/icons/development.svg',
	},
	promotion: {
		id: 'promotion',
		href: '/services/promotion',
		title: 'Продвижение',
		description: 'Контекстная реклама \n Соцсети под ключ \n SMM',
		icon: '/icons/promotion.svg',
	},
} satisfies Record<string, ServiceConfig>

export { serviceConfig }
