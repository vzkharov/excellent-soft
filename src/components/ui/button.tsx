import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~/lib/utils'

const buttonVariants = cva(
	'font-sans-bold w-fit box-border inline-flex gap-x-4 items-center justify-center whitespace-nowrap rounded-button text-sm border border-transparent transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-black text-white hover:bg-transparent hover:text-black hover:border hover:border-black',

				gradient: 'bg-gradient-to-r from-gradient-start to-gradient-end border-0 hover:text-transparent hover:bg-clip-text relative after:content-[""] after:absolute after:w-full after:h-full after:rounded-button  after:-z-20 after:bg-transparent hover:after:bg-gradient-to-r hover:after:from-gradient-start hover:after:to-gradient-end before:content-[""] before:absolute before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:bg-transparent before:rounded-button hover:before:-z-10 hover:before:bg-black',

				outlined: 'group border border-gray-800 text-gray-800 relative hover:text-transparent [&_svg]:hover:fill-blue hover:bg-clip-text hover:bg-gradient-to-r hover:from-gradient-start hover:to-gradient-end hover:border-transparent before:content-[""] before:absolute before:w-[calc(100%+2px)] before:h-[calc(100%+2px)] before:rounded-button before:-z-10 before:bg-transparent hover:before:bg-black',

				accent: 'bg-lime hover:bg-transparent hover:border hover:border-lime hover:text-lime',

				secondary: 'bg-gray-700 text-gray-300 border-0 hover:text-transparent [&_svg]:hover:fill-blue hover:bg-clip-text hover:bg-gradient-to-r hover:from-gradient-start hover:to-gradient-end hover:border-transparent relative after:content-[""] after:absolute after:w-full after:h-full after:rounded-button after:bg-transparent after:-z-20 hover:after:bg-gradient-to-r hover:after:from-gradient-start hover:after:to-gradient-end before:content-[""] before:absolute before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:bg-transparent before:-z-10 before:rounded-button hover:before:bg-gray-700',
			},
			size: {
				default: 'px-[34px] py-[14px] text-base leading-[22px]',
				lg: 'px-[60px] py-3 text-xl',
				sm: 'px-[22px] py-[10px] text-base',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

export type ButtonVariants = VariantProps<typeof buttonVariants>

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		)
	},
)
Button.displayName = 'Button'

export { Button, buttonVariants }
