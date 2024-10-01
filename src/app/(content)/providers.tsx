'use client'

import { Toaster } from 'sonner'

import type { Provider } from '~/lib/types'

import { BodyColorProvider } from '~/modules/body-color-provider'

const Providers: Provider = ({ children }) => (
	<BodyColorProvider>
		{children}

		<Toaster
			richColors
			position="bottom-center"
		/>
	</BodyColorProvider>
)

export { Providers }
