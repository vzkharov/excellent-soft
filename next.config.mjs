import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const config = {
	compress: true,
	swcMinify: true,
	// output: 'export',
	optimizeFonts: true,
	reactStrictMode: true,
	productionBrowserSourceMaps: true,
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

	typescript: {
		ignoreBuildErrors: true,
		tsconfigPath: './tsconfig.json',
	},
	eslint: {
		ignoreDuringBuilds: true,
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
