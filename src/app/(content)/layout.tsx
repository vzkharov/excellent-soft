import './globals.css'

import type { Viewport } from 'next'

import type { Layout } from '~/lib/types'
import { rootMetadata } from '~/lib/metadata'

import { Header } from '~/components/header'
import { Cookies } from '~/components/cookies'

import { Providers } from './providers'
import { fontsClassName } from './_fonts'

const Root: Layout = ({ children }) => (
	<html
		dir="ltr"
		lang="ru"
		suppressHydrationWarning
		suppressContentEditableWarning
		className={fontsClassName}
	>
		<body>
			<Providers>
				<Header />
				<main>{children}</main>
			</Providers>

			<Cookies />
		</body>
	</html>
)

export const metadata = rootMetadata

export const viewport: Viewport = {
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
	width: 'device-width',
	themeColor: [
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
		{ media: '(prefers-color-scheme: light)', color: 'black' },
	],
}

export default Root
