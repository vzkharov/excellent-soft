type LegalConfig = {
	id: string
	name: string
	url: string
}

const legalConfig = {
	cookie: {
		id: 'cookie',
		name: 'Настройки cookie',
		url: '',
	},
	privacy: {
		id: 'pricacy',
		name: 'Политика конфиденциальности',
		url: '',
	},
} satisfies Record<string, LegalConfig>

export { legalConfig }
export type { LegalConfig }
