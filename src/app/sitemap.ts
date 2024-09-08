import type { MetadataRoute } from 'next'

import { DOMAIN_URL } from '~/env'

const sitemap = (): MetadataRoute.Sitemap => [
	{
		url: `${DOMAIN_URL}`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 1,
	},
	{
		url: `${DOMAIN_URL}/works`,
		lastModified: new Date(),
		changeFrequency: 'weekly',
		priority: 0.4,
	},
	{
		url: `${DOMAIN_URL}/services/development`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.6,
	},
	{
		url: `${DOMAIN_URL}/services/design`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.6,
	},
	{
		url: `${DOMAIN_URL}/services/promotion`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.6,
	},
	{
		url: `${DOMAIN_URL}/instalment`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.2,
	},
	{
		url: `${DOMAIN_URL}/contact`,
		lastModified: new Date(),
		changeFrequency: 'yearly',
		priority: 0.1,
	},
]

export default sitemap
