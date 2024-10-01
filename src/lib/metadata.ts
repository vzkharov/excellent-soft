import type { Metadata } from 'next'

import { DOMAIN_URL, FACEBOOK_VERIFICATION, GOOGLE_VERIFICATION, YANDEX_VERIFICATION } from '~/env'

type CreateMetadataItem = {
	href: string
	name: string
	description?: string
}

const createMetadata = (item: CreateMetadataItem, layout: boolean = false): Metadata => {
	const titleTemplate = {
		default: item.name,
		template: [TEMPLATE_SYMBOL, TEMPLATE_SEPARATOR, item.name, PARENT_TEMPLATE].join(' '),
	}

	return {
		...rootMetadata,
		title: layout ? titleTemplate : item.name,
		description: item.description,

		alternates: {
			canonical: item.href,
		},
	}
}

const TEMPLATE_SYMBOL = '%s'
const TEMPLATE_SEPARATOR = '-'

const PARENT_TEMPLATE = '• Excellent Soft'

const rootMetadata: Metadata = {
	title: {
		default: 'Excellent Soft • Дизайн, разработка, продвижение',
		template: '%s • Excellent Soft',
	},
	abstract: 'Excellent Soft',
	description:
		'Excellent Soft предлагает первоклассные услуги по дизайну, разработке и продвижению, чтобы воплотить ваши идеи в жизнь',

	openGraph: {
		siteName: 'Excellent Soft',
		url: new URL(DOMAIN_URL),
		ttl: 88640,
		locale: 'ru',
	},
	twitter: {
		card: 'summary',
		site: '@excellent-soft',
	},

	icons: {
		icon: '/icon.png',
		shortcut: '/favicon.ico',
		apple: '/apple-icon.png',
	},

	referrer: 'origin',
	metadataBase: new URL(DOMAIN_URL),
	robots: { index: true, follow: true },
	manifest: new URL('manifest.webmanifest', DOMAIN_URL),
	alternates: {
		canonical: '/',
	},

	verification: {
		google: GOOGLE_VERIFICATION,
		yandex: YANDEX_VERIFICATION,

		other: {
			['facebook-domain-verification']: FACEBOOK_VERIFICATION,
		},
	},

	creator: 'Vadzim Zakharov, https://github.com/vzkharov',
	authors: [{ name: 'Vadzim Zakharov', url: 'https://github.com/vzkharov' }],
}

export { rootMetadata, createMetadata }
