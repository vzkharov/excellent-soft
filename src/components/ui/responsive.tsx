import { Fragment } from 'react'

import { cn } from '~/lib/utils'
import type { StyleProps, ReactChildren } from '~/lib/types'

type Breakpoint = 'sm' | 'md' | 'lg'

type ResponsiveProps = StyleProps & {
	breakpoint?: Breakpoint

	mobile: ReactChildren
	desktop: ReactChildren
}

const Responsive = ({ mobile, desktop, className, breakpoint = 'md', ...props }: ResponsiveProps) => (
	<Fragment>
		<div
			{...props}
			className={cn(`max-lg:hidden`, className)}
		>
			{desktop}
		</div>
		<div
			{...props}
			className={cn('lg:hidden', className)}
		>
			{mobile}
		</div>
	</Fragment>
)

Responsive.displayName = 'Responsive'

export { Responsive }
export type { Breakpoint, ResponsiveProps }
