import type { CSSProperties } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

import type { As, MergeWithHTMLProps } from '~/lib/types'

type Props<T extends As> = VariantProps<typeof textVariants> &
	Partial<{
		as: T

		size: CSSProperties['fontSize']
		weight: CSSProperties['fontWeight']
	}>

type TextProps<T extends As = 'p'> = MergeWithHTMLProps<T, Props<T>>

const Text = <T extends As>({
	as,
	size,
	color,
	style,
	weight,
	children,
	lineClamp,
	className,
	font = 'gilroy',
	inline = false,
	gradient = false,
	uppercase = false,
	...props
}: TextProps<T>) => {
	const Comp = as || 'p'

	if (!children) {
		return null
	}

	return (
		// @ts-expect-error
		<Comp
			{...props}
			style={{ ...style, fontSize: size }}
			className={textVariants({
				font,
				color,
				inline,
				gradient,
				lineClamp,
				uppercase,
				className,
			})}
		>
			{children}
		</Comp>
	)
}

const Title = <T extends As = 'h1'>({ as = 'h1' as T, font = 'bebas', ...props }: TextProps<T>) => (
	// @ts-expect-error
	<Text<T>
		as={as}
		uppercase
		font={font}
		{...props}
	/>
)

const textVariants = tv({
	base: 'leading-tight flex-none transition-all',
	variants: {
		color: {
			inherit: '',

			default: 'text-foreground',
			primary: 'text-primary',
			secondary: 'text-secondary',
			link: 'text-primary',

			ghost: 'text-content-900',
			muted: 'text-content-700',
		},
		lineClamp: {
			none: 'line-clamp-none',
			1: 'line-clamp-1',
			2: 'line-clamp-2',
			3: 'line-clamp-3',
			4: 'line-clamp-4',
			5: 'line-clamp-5',
		},

		font: {
			gilroy: 'font-gilroy',
			gilroyBold: 'font-gilroy-bold',
			bebas: 'font-bebas leading-none',
		},
		gradient: {
			true: 'bg-gradient-to-r from-gradient-start to-gradient-end text-transparent bg-clip-text',
		},
		inline: {
			true: 'inline-block',
		},
		uppercase: {
			true: 'uppercase',
		},
	},
	defaultVariants: {
		font: 'gilroy',
		color: 'inherit',
		lineClamp: 'none',

		inline: false,
		gradient: false,
		uppercase: false,
	},
})

export { Text, Title }
export type { TextProps }
