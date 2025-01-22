type ContactConfig = {
	id: string
	img: string
	name: string
	href: string
	value: string
}

const contactConfig = {
	instagram: {
		id: 'instagram',
		name: 'Instagram',
		img: '/social-media/instagram.png',
		href: 'https://www.instagram.com/exlnt.soft',
		value: '',
	},
	behance: {
		id: 'behance',
		name: 'Behance',
		img: '/social-media/behance.png',
		href: '',
		value: '',
	},
	telegram: {
		id: 'telegram',
		name: 'Telegram',
		img: '/social-media/telegram.png',
		href: 'https://t.me/+375291882527',
		value: '@esoft',
	},
	whatsapp: {
		id: 'whatsapp',
		name: 'WhatsApp',
		img: '/social-media/whatsapp.png',
		href: 'whatsapp://send?phone=+375291882527&abid=+375291882527',
		value: '@esoft',
	},
	phone: {
		id: 'phone',
		name: 'Телефон',
		img: '',
		href: 'tel:+375291882527',
		value: '+375 29 188 25 27',
	},
	email: {
		id: 'email',
		name: 'e-mail',
		img: '',
		href: 'mailto:hello@esoft.by',
		value: 'hello@esoft.by',
	},
} satisfies Record<string, ContactConfig>

export { contactConfig }
