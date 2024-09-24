import { cn } from '~/lib/utils'
import type { MergeWithHTMLProps } from '~/lib/types'

import styles from './styles.module.css'

type SpacerProps = MergeWithHTMLProps<
	'div',
	Partial<{
		full: boolean

		x: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'auto'
		y: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'auto'

		children: never
	}>
>

const Spacer = ({ x, y, full, className, ...props }: SpacerProps) => (
	<div
		{...props}
		aria-hidden
		className={cn(
			'relative, select-none',
			styles.spacer,
			styles[`y_${y}`],
			styles[`x_${x}`],
			full ? styles.full : '',
		)}
	/>
)

export { Spacer }
export type { SpacerProps }
