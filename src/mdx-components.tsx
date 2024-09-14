import type { MDXComponents } from 'mdx/types'

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
	strong: ({ children }) => <strong className="font-gilroy-bold">{children}</strong>,

	ul: ({ children }) => <ul className="ml-8 list-disc">{children}</ul>,
	ol: ({ children }) => <ol className="ml-8 list-decimal">{children}</ol>,

	p: ({ children }) => <p className="max-w-prose">{children}</p>,
	h6: ({ children }) => <h6 className="max-w-prose">{children}</h6>,
	h5: ({ children }) => <h5 className="max-w-prose">{children}</h5>,
	...components,
})
