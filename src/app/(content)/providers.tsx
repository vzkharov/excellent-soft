'use client'

import type { Provider } from '~/lib/types'

import { BodyColorProvider } from '~/modules/body-color-provider'

const Providers: Provider = ({ children }) => <BodyColorProvider>{children}</BodyColorProvider>

export { Providers }
