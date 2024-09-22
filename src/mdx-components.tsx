import type { MDXComponents } from 'mdx/types'

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
	wrapper: ({ children }) => <div className="flex flex-col">{children}</div>,

	strong: ({ children }) => <strong className="font-gilroy-bold">{children}</strong>,

	ul: ({ children }) => <ul className="ml-8 list-disc">{children}</ul>,
	ol: ({ children }) => <ol className="ml-8 list-decimal">{children}</ol>,
	li: ({ children }) => <li className="max-w-prose">{children}</li>,

	p: ({ children }) => <p className="max-w-prose">{children}</p>,
	h6: ({ children }) => <h6 className="max-w-prose">{children}</h6>,
	h5: ({ children }) => <h5 className="max-w-prose">{children}</h5>,
	h4: ({ children }) => <h4 className="max-w-prose">{children}</h4>,
	h3: ({ children }) => <h3 className="max-w-prose">{children}</h3>,
	h2: ({ children }) => <h2 className="max-w-prose">{children}</h2>,
	h1: ({ children }) => <h1 className="max-w-prose">{children}</h1>,

	...components,
})
