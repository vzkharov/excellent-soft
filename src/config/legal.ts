type LegalConfig = {
	id: string
	name: string
	url: string
}

const legalConfig = {
	cookie: {
		id: 'cookie',
		name: 'Настройки cookie',
		url: '/legal',
	},
	privacy: {
		id: 'pricacy',
		name: 'Политика конфиденциальности',
		url: '/legal',
	},
} satisfies Record<string, LegalConfig>

export { legalConfig }
export type { LegalConfig }
