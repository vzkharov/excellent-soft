import type { Metadata } from 'next'

import type { Layout } from '~/lib/types'

import { Section } from '~/components/section'

const ServiceLayout: Layout = ({ children }) => <div className="flex flex-col gap-y-24 pb-20 pt-4">{children}</div>

export const metadata: Metadata = {
	title: 'Services - Excellent Soft',
	abstract: 'Services - Excellent Soft',
	description: 'Services - Excellent Soft',
	alternates: {
		canonical: '/',
	},
}

export default ServiceLayout
