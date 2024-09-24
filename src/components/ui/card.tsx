import { tv, type VariantProps } from 'tailwind-variants'

import type { StyleProps, ReactChildren } from '~/lib/types'
import { Step } from '../step'

type CardProps = StyleProps &
	CardVariants & {
		title: string
		children?: string

		idx?: number
		endContent?: ReactChildren
		startContent?: ReactChildren
	}

const Card = ({
	idx,
	title,
	children,
	endContent,
	startContent,
	style,
	className,
	size = 'md',
	variant = 'outlined',
}: CardProps) => {
	const styles = cardVariants({ size, variant })

	return (
		<article
			style={style}
			className={styles.card({ className })}
		>
			{startContent}
			<div className={styles.header()}>
				{title ? (
					<h5 className={styles.title()}>
						{title}
						{idx ? (
							<Step
								count={idx}
								variant="shadow"
							/>
						) : null}
					</h5>
				) : null}
				{children ? <p>{children}</p> : null}
			</div>
			{endContent}
		</article>
	)
}

const cardVariants = tv({
	slots: {
		card: 'relative rounded-md flex items-center gap-2 cursor-default',
		header: 'flex-1 space-y-5 self-start',
		title: 'w-full flex items-center justify-between',
	},
	variants: {
		variant: {
			default: {
				card: 'bg-white',
			},
			shadow: {
				card: 'bg-gray-800',
			},
			outlined: {
				card: 'bg-transparent border border-dark hover:border-transparent hover:bg-primary',
			},
		},
		size: {
			sm: {
				card: 'px-5 py-4',
				title: 'text-sm',
			},
			md: {
				card: 'py-10 px-8',
				title: '',
			},
		},
	},
})

type CardVariants = VariantProps<typeof cardVariants>

export { Card }
