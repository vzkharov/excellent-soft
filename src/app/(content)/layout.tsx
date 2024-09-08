import './globals.css'

import type { Metadata, Viewport } from 'next'

import localFont from 'next/font/local'
import { Bebas_Neue } from 'next/font/google'

import { DOMAIN_URL, FACEBOOK_VERIFICATION, GOOGLE_VERIFICATION, YANDEX_VERIFICATION } from '~/env'

import type { Layout } from '~/lib/types'

import { Footer } from '~/components/footer'
import { Header } from '~/components/header'

const gilroy = localFont({
	src: './_fonts/gilroy-regular.ttf',
	display: 'swap',
	variable: '--font-gilroy',
})
const gilroyBold = localFont({
	src: './_fonts/gilroy-bold.ttf',
	display: 'swap',
	variable: '--font-gilroy-bold',
})
const bebasFont = Bebas_Neue({
	weight: ['400'],
	subsets: ['latin', 'latin-ext'],
	display: 'swap',
	variable: '--font-bebas',
})

const Root: Layout = ({ children }) => (
	<html
		dir="ltr"
		lang="ru"
		suppressHydrationWarning
		suppressContentEditableWarning
		className={[gilroy.variable, gilroyBold.variable, bebasFont.variable].join(' ')}
	>
		<body className="flex min-h-screen w-screen flex-col overflow-x-clip">
			<Header />
			<main className="flex w-full flex-1 flex-col gap-y-2 px-2">{children}</main>
			<Footer />
		</body>
	</html>
)

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'black' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
	width: 'device-width',
}

export const metadata: Metadata = {
	referrer: 'origin',
	authors: [{ name: 'Vadzim Zakharov', url: 'https://github.com/vzkharov' }],
	verification: {
		google: GOOGLE_VERIFICATION,
		yandex: YANDEX_VERIFICATION,

		other: {
			['facebook-domain-verification']: FACEBOOK_VERIFICATION,
		},
	},

	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
	},

	applicationName: '',
	generator: 'Next.JS',
	metadataBase: new URL(DOMAIN_URL),
	robots: { index: true, follow: true },
	manifest: `${DOMAIN_URL}/manifest.webmanifest`,
	creator: 'Vadzim Zakharov, https://github.com/vzkharov',
	title: 'Excellent Soft',
	abstract: 'Excellent Soft',
	description: 'Excellent Soft',
	alternates: {
		canonical: '/',
	},
}

export default Root
