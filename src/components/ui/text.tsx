import type { CSSProperties } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { renderSplittedText } from '~/helpers/string'

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
	weight,
	children,
	lineClamp,
	className,
	font = 'gilroy',
	bold = false,
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
			className={textVariants({
				font,
				bold,
				size,
				color,
				inline,
				gradient,
				lineClamp,
				uppercase,
				className,
			})}
		>
			{typeof children === 'string' ? renderSplittedText(children) : children}
		</Comp>
	)
}

const Title = <T extends As = 'h1'>({ as = 'h1' as T, font = 'bebas', ...props }: TextProps<T>) => (
	// @ts-expect-error
	<Text
		as={as}
		uppercase
		font={font}
		{...props}
	/>
)

const textVariants = tv({
	base: 'leading-tight flex-none',
	variants: {
		color: {
			inherit: '',

			default: 'text-dark',
			foreground: 'text-white',
			primary: 'text-primary',
			secondary: 'text-secondary',

			link: 'underline hover:text-primary cursor-pointer',

			ghost: 'text-gray-900',
			muted: 'text-gray-700',
		},
		size: {
			xs: 'text-xs',
			sm: 'text-sm',
			md: 'text-md',
			lg: 'text-lg',
			xl: 'text-xl',
			'2xl': 'text-2xl',
			'3xl': 'text-3xl',
			'4xl': 'text-4xl',
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
			['gilroy-bold']: 'font-gilroy-bold',
			bebas: 'font-bebas leading-none',
		},

		bold: {
			true: 'font-gilroy-bold',
		},
		gradient: {
			true: 'text-gradient select-none',
		},
		inline: {
			true: 'inline-block',
		},
		uppercase: {
			true: 'uppercase',
		},
	},
	defaultVariants: {
		size: undefined,
		color: undefined,
		font: 'gilroy',
		lineClamp: 'none',

		bold: false,
		inline: false,
		gradient: false,
		uppercase: false,
	},
})

export { Text, Title }
export type { TextProps }
