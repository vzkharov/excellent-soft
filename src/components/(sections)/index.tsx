import { tv, VariantProps } from 'tailwind-variants'

import type { As, MergeWithHTMLProps } from '~/lib/types'

import { Text } from '~/components/ui/text'

type Props = SectionVariants & {
	as?: As
	bg?: string
	title?: string
}

type SectionProps<T extends As = 'section'> = MergeWithHTMLProps<T, Props>

const Section = <T extends As = 'section'>({
	as,
	bg,
	title,
	color,
	className,
	children,
	...props
}: SectionProps<T>) => {
	const Slot = as || 'section'

	const styles = sectionVariants({ color })

	return (
		<Slot className={styles.base({ className: bg })}>
			<div
				{...props}
				className={styles.content({ className })}
			>
				{title ? (
					<Text
						as="h6"
						font="gilroy-bold"
					>
						{title}
					</Text>
				) : null}
				{children}
			</div>
		</Slot>
	)
}

const sectionVariants = tv({
	slots: {
		base: '',
		content: 'container',
	},
	variants: {
		color: {
			white: { base: 'bg-white', content: 'text-dark' },
			dark: { base: 'bg-dark', content: 'text-white' },
			black: { base: 'bg-black', content: 'text-white' },
			gray: { base: 'bg-[#171717]', content: 'text-white' },
			transparent: { base: 'bg-transparent', content: 'text-white' },

			metal: { base: 'bg-gradient-to-r from-gray-200 to-dark', content: 'text-white' },
			brand: {
				base: 'bg-gradient-to-r from-gradient-start to-gradient-end',
				content: 'min-h-[96px] text-dark',
			},
			primary: {
				base: 'bg-primary',
				content: 'min-h-[96px] text-dark',
			},
		},
	},
})

type SectionVariants = VariantProps<typeof sectionVariants>

export { Section }
export type { SectionProps }
