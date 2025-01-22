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
				button: 'bg-black border-black hover:bg-transparent focus-visible:bg-transparent',
				text: 'text-white group-hover/button:text-black group-focus-visible:text-black',
			},
			outlined: {
				button: 'border-white hover:bg-white ',
				text: 'text-white group-hover/button:text-dark  group-hover/button:font-gilroy-bold ',
			},
			primary: {
				button: 'bg-primary border-black hover:bg-black focus-visible:bg-dark  ',
				text: 'text-dark group-hover/button:text-primary group-focus-visible:text-primary',
			},
			secondary: {
				button: 'bg-white/10 hover:border-primary focus-visible:bg-[#474b52]',
				text: 'text-white group-hover/button:text-primary group-focus-visible:text-primary',
			},

			shadow: {
				button: 'bg-white/10 border-black hover:bg-black',
				text: 'text-black group-hover/button:text-white ',
			},
			gradient: {
				button: 'bg-white/10  focus-visible:bg-transparent',
				text: 'text-white group-hover/button:text-primary group-focus-visible:text-primary',
			},
			foreground: {
				button: 'bg-white ',
				text: 'text-black group-hover/button:text-dark  group-hover/button:font-gilroy-bold ',
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
