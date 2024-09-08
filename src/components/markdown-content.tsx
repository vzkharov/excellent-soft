import Markdown from 'markdown-to-jsx'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

type MarkdownContentProps = StyleProps & {
	children: string
}

const MarkdownContent = ({ style, className, children }: MarkdownContentProps) => (
	<Markdown
		style={style}
		className={cn('prose max-w-none', className)}
	>
		{children}
	</Markdown>
)

export { MarkdownContent }
export type { MarkdownContentProps }
