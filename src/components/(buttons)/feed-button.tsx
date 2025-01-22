import Link from 'next/link'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { feedConfig } from '~/config/feed'

import { Button, type ButtonProps } from '~/components/ui/button'

type FeedButtonProps = Pick<ButtonProps, 'size' | 'bold' | 'variant'> &
	FeedButtonVariants &
	StyleProps & {
		short?: boolean
	}

const FeedButton = ({ size, bold, variant, className, short = false, dir = 'x', ...props }: FeedButtonProps) => (
	<div
		{...props}
		className={feedButtonVariants({ dir })}
	>
		{short ? (
			<>
				<Link
					href={feedConfig.telegram.url}
					target="_blank"
				>
					<Button
						size={size}
						bold={bold}
						variant={variant}
						className={cn('[&>*]:gap-x-3', className)}
					>
						{feedConfig.telegram.name}
						{feedConfig.telegram.icon}
					</Button>
				</Link>
				<Link
					href={feedConfig.whatsapp.url}
					target="_blank"
				>
					<Button
						size={size}
						bold={bold}
						variant={variant}
						className={cn('[&>*]:gap-x-3', className)}
					>
						{feedConfig.whatsapp.icon}
					</Button>
				</Link>
			</>
		) : (
			<>
				{[feedConfig.telegram, feedConfig.whatsapp].map((feed) => (
					<Link
						key={feed.id}
						href={feed.url}
						target="_blank"
					>
						<Button
							size={size}
							bold={bold}
							variant={variant}
							className={cn('[&>*]:gap-x-3', className)}
						>
							{feed.name}
							{feed.icon}
						</Button>
					</Link>
				))}
			</>
		)}
	</div>
)

const feedButtonVariants = tv({
	base: 'flex gap-x-3 gap-y-2',
	variants: {
		dir: {
			x: 'flex-row items-center flex-wrap',
			y: 'flex-col w-full',
		},
	},
	defaultVariants: {
		dir: 'x',
	},
})

type FeedButtonVariants = VariantProps<typeof feedButtonVariants>

export { FeedButton }
