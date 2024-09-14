type FeedConfig = {
	id: string
	url: string
	name: string
}

const feedConfig = {
	telegram: {
		id: 'telegram',
		name: 'Задать вопрос',
		url: '',
	},
	whatsapp: {
		id: 'telegram',
		name: 'Whats App',
		url: '',
	},
} satisfies Record<string, FeedConfig>

export { feedConfig }
export type { FeedConfig }
