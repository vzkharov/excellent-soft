import { cn } from '~/lib/utils'
import type { StyleProps, ReactChildren } from '~/lib/types'

type BackgroundImageProps = StyleProps & {
	children: ReactChildren
}

const BackgroundImage = ({ children, className, ...props }: BackgroundImageProps) => (
	<div
		aria-hidden
		className={cn(
			'pointer-events-none absolute left-0 top-0 -z-10 flex h-[90vh] w-screen bg-dark',
			className,
		)}
	>
		{children}
	</div>
)

export { BackgroundImage }
