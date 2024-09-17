'use client'

import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { tv, type VariantProps } from 'tailwind-variants'

type SeparatorProps = React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & SeparatorVariants

const Separator = React.forwardRef<React.ElementRef<typeof SeparatorPrimitive.Root>, SeparatorProps>(
	({ className, color = 'default', orientation = 'horizontal', decorative = true, ...props }, ref) => (
		<SeparatorPrimitive.Root
			ref={ref}
			decorative={decorative}
			orientation={orientation}
			className={separatorVariants({ color, orientation, className })}
			{...props}
		/>
	),
)
Separator.displayName = SeparatorPrimitive.Root.displayName

const separatorVariants = tv({
	base: 'shrink-0',
	variants: {
		orientation: {
			horizontal: 'h-px w-full',
			vertical: 'h-full w-px',
		},
		color: {
			default: 'bg-border',
			foreground: 'bg-gray-300',
		},
	},
	defaultVariants: {
		color: 'default',
		orientation: 'horizontal',
	},
})

type SeparatorVariants = VariantProps<typeof separatorVariants>

export { Separator }
