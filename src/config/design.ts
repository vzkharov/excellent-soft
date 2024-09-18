import type { Design } from '~/entities/design'

const designCardsConfig = {
	mobile: {
		id: 'mobile',
		title: 'Приложение',
		cover: '/design-cards/mobile.png',
	},
	dashboard: {
		id: 'dashboard',
		title: 'Дашборд',
		cover: '/design-cards/dashboard.png',
	},
	crm: {
		id: 'crm',
		title: 'CRM',
		cover: '/design-cards/crm.png',
	},
} satisfies Record<string, Design>

export { designCardsConfig }
