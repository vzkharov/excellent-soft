import { cn } from '~/lib/utils'
import type { StyleProps, ReactChildren } from '~/lib/types'

type BackgroundImageProps = StyleProps & {
	children: ReactChildren
}

const BackgroundImage = ({ children, className, ...props }: BackgroundImageProps) => (
	<div
		aria-hidden
		className={cn(
			'pointer-events-none absolute left-0 top-0 -z-10 h-[90vh] min-h-[900px] w-screen overflow-x-hidden bg-dark',
			className,
		)}
	>
		{children}
	</div>
)

export { BackgroundImage }
