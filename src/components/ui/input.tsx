import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & InputVariants

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, variant = 'default', ...props }, ref) => (
		<input
			type={type}
			className={inputVariants({ variant, className })}
			ref={ref}
			{...props}
		/>
	),
)

Input.displayName = '@excellent-soft/input'

const inputVariants = tv({
	base: 'flex h-11 w-full border-b border-gray-300 bg-transparent transition-colors placeholder:text-gray-700 focus-visible:border-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
	variants: {
		variant: {
			default: 'text-dark border-gray-700 placeholder:text-gray-300 focus-visible:border-dark',
			foreground: 'text-white border-gray-300 placeholder:text-gray-700 focus-visible:border-white',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
})

type InputVariants = VariantProps<typeof inputVariants>

export { Input }
export type { InputProps }
