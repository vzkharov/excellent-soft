import type { MetadataRoute } from 'next'

const manifest = (): MetadataRoute.Manifest => ({
	name: 'Excellent Soft | Дизайн, разработка, продвижение',
	short_name: 'Excellent Soft',
	description:
		'Excellent Soft предлагает первоклассные услуги по дизайну, разработке и продвижению, чтобы воплотить ваши идеи в жизнь',
	start_url: '/',
	display: 'standalone',
	background_color: '#fff',
	theme_color: '#fff',
	icons: [
		{
			sizes: '64x64',
			src: '/favicon.ico',
			type: 'image/x-icon',
		},
	],
})

export default manifest
