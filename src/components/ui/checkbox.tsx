'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from '~/lib/utils'

import { CheckIcon } from './icons/check-icon'

type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & CheckboxVariants

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
	({ id, className, variant = 'default', ...props }, ref) => (
		<CheckboxPrimitive.Root
			ref={ref}
			id={id}
			className={checkboxVariants({ variant, className })}
			{...props}
		>
			<CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
				<CheckIcon className="h-4 w-4" />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	),
)
Checkbox.displayName = CheckboxPrimitive.Root.displayName

const checkboxVariants = tv({
	base: 'peer h-5 w-5 shrink-0 rounded-[1px] border focus-visible:outline-none focus-visible:outline-1 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
	variants: {
		variant: {
			default: 'border-dark focus-visible:outline-dark data-[state=checked]:bg-dark data-[state=checked]:text-white',
			foreground: 'border-white focus-visible:outline-white data-[state=checked]:bg-white data-[state=checked]:text-dark',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
})

type CheckboxVariants = VariantProps<typeof checkboxVariants>

export { Checkbox }
export type { CheckboxProps }
