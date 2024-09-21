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
		button: 'group w-fit box-border rounded-full border border-transparent select-none focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
		text: 'w-full h-full inline-flex gap-x-2 items-center justify-center whitespace-nowrap',
	},

	variants: {
		variant: {
			secondary: 'bg-gray-800 text-gray-200 border-0 hover:text-transparent [&_svg]:hover:fill-pr hover:bg-clip-text hover:bg-gradient-to-r hover:from-gradient-start hover:to-gradient-end hover:border-transparent relative after:content-[""] after:absolute after:w-full after:h-full after:rounded-button after:bg-transparent after:-z-20 hover:after:bg-gradient-to-r hover:after:from-gradient-start hover:after:to-gradient-end before:content-[""] before:absolute before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:bg-transparent before:-z-10 before:rounded-button hover:before:bg-gray-800',

			// valid
			default: {
				button: 'bg-dark border-dark hover:bg-transparent focus-visible:bg-transparent',
				text: 'text-white group-hover:text-dark group-focus-visible:text-dark',
			},
			outlined: {
				button: 'border-dark hover:bg-dark',
				text: 'text-dark group-hover:text-gradient group-hover:font-gilroy-bold group-hover:[&>svg]:stroke-secondary',
			},
			primary: {
				button: 'bg-primary border-primary hover:bg-transparent focus-visible:bg-transparent ',
				text: 'text-dark group-hover:text-primary group-focus-visible:text-primary',
			},

			shadow: {
				button: 'bg-gray-300/30 hover:border-secondary active:bg-transparent',
				text: 'text-gray-700 group-hover:text-gradient',
			},
			gradient: {
				button: 'border-transparent text-dark hover:border-secondary bg-gradient-to-r  from-gradient-start to-gradient-end hover:bg-none',
				text: 'group-hover:text-gradient',
			},
		},
		size: {
			sm: { button: 'px-5 py-2 ', text: 'text-xs' },
			md: { button: 'px-6 py-2 ', text: 'text-sm' },
			lg: { button: 'px-16 py-3 ', text: 'text-md' },
			icon: { button: 'h-9 w-9' },
		},
		bold: {
			true: { text: 'font-gilroy-bold' },
			false: { text: 'font-gilroy' },
		},
		full: {
			true: { button: 'w-full' },
			false: { button: 'w-max' },
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
