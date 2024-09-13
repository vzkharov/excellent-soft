'use client'

import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

import { cn } from '~/lib/utils'

const Popover = PopoverPrimitive.Root

const PopoverTrigger = React.forwardRef<
	React.ElementRef<typeof PopoverPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>
>(({ className, ...props }, ref) => (
	<PopoverPrimitive.Trigger
		ref={ref}
		className={cn(
			'aria-expanded:text-dark aspect-square rounded-full bg-gray-200 text-white aria-expanded:bg-white',
			className,
		)}
		{...props}
	/>
))
PopoverTrigger.displayName = PopoverPrimitive.Trigger.displayName

const PopoverAnchor = PopoverPrimitive.Anchor

type PopoverContentProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
	width?: number | string
}

const PopoverContent = React.forwardRef<React.ElementRef<typeof PopoverPrimitive.Content>, PopoverContentProps>(
	({ style, className, width, align = 'center', sideOffset = 4, ...props }, ref) => (
		<PopoverPrimitive.Portal>
			<PopoverPrimitive.Content
				ref={ref}
				align={align}
				sideOffset={sideOffset}
				style={{ ...style, width }}
				className={cn(
					'z-50 rounded-md bg-gradient-to-tr from-gray-200 to-gray-100 text-background outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
					className,
				)}
				{...props}
			/>
		</PopoverPrimitive.Portal>
	),
)
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
