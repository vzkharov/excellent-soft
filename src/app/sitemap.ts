import type { MetadataRoute } from 'next'

import { DOMAIN_URL } from '~/env'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
	return [
		{
			url: `${DOMAIN_URL}`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
	]
}

export default sitemap
