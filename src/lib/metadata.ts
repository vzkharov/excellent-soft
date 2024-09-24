import type { Metadata } from 'next'

type CreateMetadataItem = {
	href: string
	name: string
	description?: string
}

const createMetadata = (item: CreateMetadataItem, layout: boolean = false): Metadata => {
	const titleTemplate = {
		default: item.name,
		template: [TEMPLATE_SYMBOL, TEMPLATE_SEPARATOR, item.name].join(' '),
	}

	return {
		title: layout ? titleTemplate : item.name,
		description: item.description,

		alternates: {
			canonical: item.href,
		},
	}
}

const TEMPLATE_SYMBOL = '%s'
const TEMPLATE_SEPARATOR = '-'

export { createMetadata }
