import type { MDXComponents } from 'mdx/types'

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
	strong: ({ children }) => <strong className="font-gilroy-bold">{children}</strong>,
	ul: ({ children }) => <ul className="ml-8 list-disc">{children}</ul>,
	ol: ({ children }) => <ol className="ml-8 list-decimal">{children}</ol>,
	...components,
})
