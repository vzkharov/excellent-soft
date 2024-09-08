import type { MetadataRoute } from 'next'

const manifest = (): MetadataRoute.Manifest => ({
	name: 'Excellent Soft',
	short_name: 'Excellent Soft',
	description: 'Excellent Soft',
	start_url: '/',
	display: 'standalone',
	background_color: '#fff',
	theme_color: '#fff',
	icons: [
		{
			sizes: 'any',
			src: '/favicon.ico',
			type: 'image/x-icon',
		},
	],
})

export default manifest
