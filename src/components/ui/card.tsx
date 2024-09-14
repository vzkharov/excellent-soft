import { tv, type VariantProps } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'

type CardProps = StyleProps &
	CardVariants & {
		title: string
		description?: string
	}

const Card = ({ title, style, className, description, size = 'md', variant = 'outlined' }: CardProps) => (
	<article
		style={style}
		className={cardVariants({ size, variant, className })}
	>
		<h5>{title}</h5>
		{description ? <p>{description}</p> : null}
	</article>
)

const cardVariants = tv({
	base: 'rounded-md flex flex-col gap-y-5 cursor-default',
	variants: {
		variant: {
			default: '',
			foreground: '',
			outlined: 'bg-transparent border border-dark hover:border-transparent focus:border-transparent hover:bg-primary focus:bg-primary',
		},
		size: {
			sm: '',
			md: 'py-10 px-8',
		},
	},
})

type CardVariants = VariantProps<typeof cardVariants>

export { Card }
