import { TelegramIcon } from '~/components/ui/icons/telegram-icon'
import { WhatsAppIcon } from '~/components/ui/icons/whatsapp-icon'

type FeedConfig = {
	id: string
	url: string
	name: string
	icon: React.ReactNode
}

const feedConfig = {
	telegram: {
		id: 'telegram',
		name: 'Задать вопрос',
		url: '',
		icon: <TelegramIcon />,
	},
	whatsapp: {
		id: 'whatsapp',
		name: 'Whats App',
		url: '',
		icon: <WhatsAppIcon />,
	},
} satisfies Record<string, FeedConfig>

export { feedConfig }
export type { FeedConfig }
