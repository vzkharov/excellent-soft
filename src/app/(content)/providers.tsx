'use client'

import type { Provider } from '~/lib/types'

import { ToastProvider } from '~/modules/toast-provider'
import { BodyColorProvider } from '~/modules/body-color-provider'

const Providers: Provider = ({ children }) => (
	<BodyColorProvider>
		{children}
		<ToastProvider />
	</BodyColorProvider>
)

export { Providers }
