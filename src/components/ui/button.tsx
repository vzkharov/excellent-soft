import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, bold, full, children, ...props }, ref) => {
		const styles = buttonVariants({ full, bold, variant, size })

		return (
			<button
				className={styles.button({ className })}
				ref={ref}
				{...props}
			>
				<span className={styles.text()}>{children}</span>
			</button>
		)
	},
)
Button.displayName = '@excellent-soft/button'

const buttonVariants = tv({
	slots: {
		button: 'group/button w-fit box-border rounded-full border border-transparent select-none focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-[.95] duration-300 ease-in-out transition-transform',
		text: 'w-full h-full inline-flex gap-x-2 items-center justify-center whitespace-nowrap',
	},

	variants: {
		variant: {
			default: {
				button: 'bg-dark border-dark hover:bg-transparent focus-visible:bg-transparent',
				text: 'text-white group-hover/button:text-dark group-focus-visible:text-dark',
			},
			outlined: {
				button: 'border-dark hover:bg-dark',
				text: 'text-dark group-hover/button:text-gradient group-hover/button:font-gilroy-bold group-hover/button:[&>svg]:text-secondary',
			},
			primary: {
				button: 'bg-primary border-primary hover:bg-transparent focus-visible:bg-transparent ',
				text: 'text-dark group-hover/button:text-primary group-focus-visible:text-primary',
			},
			shadow: {
				button: 'bg-gray-300/30',
				text: 'text-gray-700 group-hover/button:text-gradient group-hover/button:[&>svg]:text-secondary',
			},
			gradient: {
				button: 'border-transparent text-dark hover:border-secondary bg-gradient-to-r from-gradient-start to-gradient-end hover:bg-none',
				text: 'group-hover/button:text-gradient',
			},
		},
		size: {
			sm: { button: 'px-5 h-10', text: 'text-xs' },
			md: { button: 'px-6 h-11', text: 'text-sm' },
			lg: { button: 'md:px-16 py-3 h-13 max-md:w-full', text: 'text-md' },
			icon: { button: 'h-9 w-9' },
		},
		bold: {
			true: { text: 'font-gilroy-bold' },
			false: { text: 'font-gilroy' },
		},
		full: {
			true: { button: 'w-full' },
			false: { button: '' },
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'md',
		bold: false,
		full: false,
	},
})

type ButtonVariants = VariantProps<typeof buttonVariants>

export { Button }
export type { ButtonProps }
