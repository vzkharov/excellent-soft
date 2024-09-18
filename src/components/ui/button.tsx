import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~/lib/utils'

const buttonVariants = cva(
	'w-fit box-border rounded-full inline-flex gap-x-2 items-center justify-center whitespace-nowrap rounded-button text-sm border border-transparent duration-200 select-none focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-dark text-white hover:bg-transparent hover:text-dark hover:border hover:border-dark',
				gradient: 'bg-gradient-to-r from-gradient-start to-gradient-end border-0 hover:text-transparent hover:bg-clip-text relative after:content-[""] after:absolute after:w-full after:h-full after:rounded-full after:-z-20 after:bg-transparent hover:after:bg-gradient-to-r hover:after:from-gradient-start hover:after:to-gradient-end before:content-[""] before:absolute before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:bg-transparent before:rounded-full hover:before:-z-10 hover:before:bg-dark',
				outlined: 'group border border-dark text-dark relative hover:text-transparent hover:!font-gilroy-bold [&_svg]:hover:text-secondary [&_svg]:hover:stroke-2 hover:bg-clip-text hover:bg-gradient-to-r hover:from-gradient-start hover:to-gradient-end hover:border-transparent before:content-[""] before:absolute before:w-[calc(100%+2px)] before:h-[calc(100%+2px)] before:rounded-full before:-z-10 before:bg-transparent hover:before:bg-dark',
				accent: 'bg-lime hover:bg-transparent hover:border hover:border-lime hover:text-lime',
				secondary: 'bg-gray-800 text-gray-200 border-0 hover:text-transparent [&_svg]:hover:fill-pr hover:bg-clip-text hover:bg-gradient-to-r hover:from-gradient-start hover:to-gradient-end hover:border-transparent relative after:content-[""] after:absolute after:w-full after:h-full after:rounded-button after:bg-transparent after:-z-20 hover:after:bg-gradient-to-r hover:after:from-gradient-start hover:after:to-gradient-end before:content-[""] before:absolute before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:bg-transparent before:-z-10 before:rounded-button hover:before:bg-gray-800',
			},
			size: {
				sm: 'px-5 py-2 text-xs',
				md: 'px-6 py-2 text-sm',
				lg: 'px-8 py-4 text-md',
				icon: 'h-9 w-9',
			},
			bold: {
				true: 'font-gilroy-bold',
				false: 'font-gilroy',
			},
			full: {
				true: 'w-full',
				false: 'w-max',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'md',
			bold: false,
			full: false,
		},
	},
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, bold, full, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(buttonVariants({ full, bold, variant, size, className }))}
				ref={ref}
				{...props}
			/>
		)
	},
)
Button.displayName = 'Button'

export { Button, buttonVariants }
