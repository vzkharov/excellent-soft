import { tv, type VariantProps } from 'tailwind-variants'

import type { StyleProps, ReactChildren } from '~/lib/types'

import { Step } from './step'

type CardProps = StyleProps &
	CardVariants & {
		title: string
		children?: ReactChildren

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
						{typeof idx === 'number' ? (
							<Step
								count={idx}
								variant="shadow"
							/>
						) : null}
					</h5>
				) : null}
				{children ? <div>{children}</div> : null}
			</div>
			{endContent}
		</article>
	)
}

const cardVariants = tv({
	slots: {
		card: 'relative rounded-md flex items-center gap-2 cursor-default',
		header: 'flex-1 space-y-5 self-start',
		title: 'w-full flex items-center justify-between gap-x-2',
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
			dark: {
				card: 'bg-[#5A5F6B] text-white',
			},
			grey: {
				card: 'bg-[#F3F3F3]',
			},
			white: {
				card: 'bg-white/50',
			},
		},
		size: {
			sm: {
				card: 'px-5 py-4',
				title: 'text-sm',
			},
			md: {
				card: 'max-md:py-5 max-md:px-5 py-10 px-8',
				title: 'max-md:text-md',
			},
		},
	},
})

type CardVariants = VariantProps<typeof cardVariants>

export { Card }
