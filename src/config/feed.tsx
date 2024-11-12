import { Fragment } from 'react'
import { TelegramIcon } from '~/components/ui/icons/telegram-icon'
import { WhatsAppIcon } from '~/components/ui/icons/whatsapp-icon'

type FeedConfig = {
	id: string
	url: string
	name: string
	icon?: React.ReactNode
}

const feedConfig = {
	telegram: {
		id: 'telegram',
		name: 'Задать вопрос',
		url: 'https://t.me/+375291882527',
		icon: <TelegramIcon />,
	},
	whatsapp: {
		id: 'whatsapp',
		name: 'Whats App',
		url: 'whatsapp://send?phone=+375291882527&abid=+375291882527',
		icon: <WhatsAppIcon />,
	},
	phone: {
		id: 'phone',
		name: '+375 29 188 25 27',
		url: 'tel:+375291882527',
		icon: <Fragment />,
	},
} satisfies Record<string, FeedConfig>

export { feedConfig }
export type { FeedConfig }
