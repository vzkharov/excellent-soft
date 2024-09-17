import * as React from 'react'

import { cn } from '~/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => (
	<input
		type={type}
		className={cn(
			'flex h-11 w-full border-b border-gray-300 bg-transparent transition-colors placeholder:text-gray-700 focus-visible:border-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
			className,
		)}
		ref={ref}
		{...props}
	/>
))

Input.displayName = '@excellent-soft/input'

export { Input }
export type { InputProps }
