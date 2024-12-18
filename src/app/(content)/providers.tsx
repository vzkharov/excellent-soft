'use client'

import { YANDEX_METRICA_ID } from '~/env'
import type { Provider } from '~/lib/types'

import { YandexMetrica } from '~/modules/ym-provider'
import { ToastProvider } from '~/modules/toast-provider'
import { BodyColorProvider } from '~/modules/body-color-provider'

const Providers: Provider = ({ children }) => (
	<BodyColorProvider>
		{children}
		<ToastProvider />
		{YANDEX_METRICA_ID && <YandexMetrica counterId={YANDEX_METRICA_ID} />}
	</BodyColorProvider>
)

export { Providers }
