type ContactConfig = {
	id: string
	img: string
	name: string
	href: string
	value: string
}

const contactConfig = {
	instagram: { id: 'instagram', name: 'Instagram', img: '/social-media/instagram.svg', href: '', value: '' },
	behance: { id: 'behance', name: 'Behance', img: '/social-media/behance.svg', href: '', value: '' },
	telegram: { id: 'telegram', name: 'Telegram', img: '/social-media/telegram.png', href: '', value: '' },
	whatsapp: { id: 'whatsapp', name: 'WhatsApp', img: '/social-media/whatsapp.svg', href: '', value: '' },
	phone: { id: 'phone', name: 'Телефон', img: '', href: 'tel:+375296334212', value: '+375 29 633 42 12' },
	email: { id: 'email', name: 'e-mail', img: '', href: 'mailto:hello@esoft.by', value: 'hello@esoft.by' },
} satisfies Record<string, ContactConfig>

export { contactConfig }
