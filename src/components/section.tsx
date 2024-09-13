import { tv } from 'tailwind-variants'

import type { As, ReactChildren, MergeWithHTMLProps } from '~/lib/types'

type Props = {
	as?: As
	bg?: string
}

type SectionComponent = <T extends As = 'section'>(props: MergeWithHTMLProps<T, Props>) => ReactChildren

const Section: SectionComponent = ({ as, bg, style, className, children, ...props }) => {
	const Slot = as || 'section'

	return (
		<Slot className={styles.base({ className: bg })}>
			<div
				{...props}
				className={styles.content({ className })}
			>
				{children}
			</div>
		</Slot>
	)
}

const styles = tv({
	slots: {
		base: '',
		content: 'container',
	},
	variants: {
		gradient: {},
	},
})()

export { Section }
