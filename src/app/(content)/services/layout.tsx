import { Metadata } from 'next'

import { Footer } from '~/components/footer'

import type { Layout } from '~/lib/types'
import { createMetadata } from '~/lib/metadata'

import { navigation } from '~/config/navigation'

const ServiceLayout: Layout = ({ children }) => (
	<>
		<div className="flex flex-col gap-y-24 pb-20 pt-4">{children}</div>
		<Footer />
	</>
)

export const metadata: Metadata = createMetadata(navigation.services, true)

export default ServiceLayout
