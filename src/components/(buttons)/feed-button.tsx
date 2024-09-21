import { tv, type VariantProps } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'
import { feedConfig } from '~/config/feed'

import { Button, type ButtonProps } from '~/components/ui/button'

type FeedButtonProps = Pick<ButtonProps, 'size' | 'bold' | 'variant'> & FeedButtonVariants & StyleProps & {}

const FeedButton = ({ size, bold, variant, className, dir = 'x', ...props }: FeedButtonProps) => (
	<div
		{...props}
		className={feedButtonVariants({ dir })}
	>
		{[feedConfig.telegram, feedConfig.whatsapp].map((feed) => (
			<Button
				key={feed.id}
				size={size}
				bold={bold}
				variant={variant}
				className={className}
			>
				{feed.name}
			</Button>
		))}
	</div>
)

const feedButtonVariants = tv({
	base: 'flex gap-x-3 gap-y-1.5',
	variants: {
		dir: {
			x: 'flex-row items-center',
			y: 'flex-col w-full',
		},
	},
	defaultVariants: {
		dir: 'x',
	},
})

type FeedButtonVariants = VariantProps<typeof feedButtonVariants>

export { FeedButton }
