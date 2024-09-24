import type { MetadataRoute } from 'next'

import { DOMAIN_URL } from '~/env'

const sitemap = (): MetadataRoute.Sitemap => {
	const lastModified = new Date()

	return [
		{
			lastModified,
			priority: 1,
			changeFrequency: 'monthly',
			url: createSitemapPath('/'),
		},
		{
			lastModified,
			priority: 0.4,
			changeFrequency: 'weekly',
			url: createSitemapPath('/projects'),
		},
		{
			lastModified,
			priority: 0.6,
			changeFrequency: 'monthly',
			url: createSitemapPath('/services/development'),
		},
		{
			lastModified,
			priority: 0.6,
			changeFrequency: 'monthly',
			url: createSitemapPath('/services/design'),
		},
		{
			lastModified,
			priority: 0.6,
			changeFrequency: 'monthly',
			url: createSitemapPath('/services/promotion'),
		},
		{
			lastModified,
			priority: 0.2,
			changeFrequency: 'monthly',
			url: createSitemapPath('/payment'),
		},
		{
			lastModified,
			priority: 0.1,
			changeFrequency: 'yearly',
			url: createSitemapPath('/contact'),
		},
	]
}

const createSitemapPath = (path: string) => new URL(path, DOMAIN_URL).toString()

export default sitemap
