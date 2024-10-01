import { Metadata } from 'next'

import type { Layout } from '~/lib/types'
import { createMetadata } from '~/lib/metadata'

import { navigation } from '~/config/navigation'

const ServiceLayout: Layout = ({ children }) => <div className="flex flex-col gap-y-24  pt-4">{children}</div>

export const metadata: Metadata = createMetadata(navigation.services, true)

export default ServiceLayout
