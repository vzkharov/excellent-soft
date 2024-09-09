import createMDX from '@next/mdx'

const IS_STATIC = process.env.STATIC_EXPORT === 'true'

/** @type {import('next').NextConfig} */
const config = {
	compress: true,
	swcMinify: true,
	output: IS_STATIC ? 'export' : undefined,
	optimizeFonts: true,
	reactStrictMode: true,
	productionBrowserSourceMaps: true,
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

	typescript: {
		tsconfigPath: './tsconfig.json',
	},

	images: {
		minimumCacheTTL: 31536000,
		dangerouslyAllowSVG: true,
		formats: ['image/webp'],
	},
}

const withMDX = createMDX({})

// Merge MDX config with Next.js config
export default withMDX(config)
