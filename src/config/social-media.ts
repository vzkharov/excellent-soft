type SocialMediaConfig = {
	id: string
	img: string
	name: string
	href: string
	value: string
}

const socialMediaConfig = {
	instagram: {
		id: 'instagram',
		name: 'Instagram',
		img: '/social-media/instagram.svg',
		href: '',
		value: '',
	},
	behance: {
		id: 'behance',
		name: 'Behance',
		img: '/social-media/behance.svg',
		href: '',
		value: '',
	},
	telegram: {
		id: 'telegram',
		name: 'Telegram',
		img: '/social-media/telegram.svg',
		href: '',
		value: '',
	},
	whatsapp: {
		id: 'whatsapp',
		name: 'WhatsApp',
		img: '/social-media/whatsapp.svg',
		href: '',
		value: '',
	},
} satisfies Record<string, SocialMediaConfig>

export { socialMediaConfig }
