import { tv } from 'tailwind-variants'

import type { StyleProps, ReactChildren } from '~/lib/types'

import { Spacer } from '~/components/ui/spacer'
import { AccordionCloseIcon, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion'

import { FeedButton } from '~/components/(buttons)/feed-button'

type FaqCardProps = StyleProps & {
	id: string
	title: string
	content: ReactChildren
	image?: string
}

const FaqCard = ({ id, image, title, content, className, ...props }: FaqCardProps) => (
	<AccordionItem
		{...props}
		value={id}
		className={styles.card({ className })}
	>
		<AccordionTrigger className={styles.trigger()}>
			<span className={styles.title()}>{title}</span>
			<AccordionCloseIcon className={styles.closeIcon()} />
		</AccordionTrigger>
		<AccordionContent className={styles.content()}>
			<div className={styles.markdown()}>{content}</div>
			<Spacer y="xl" />
			<FeedButton
				bold
				variant="shadow"
			/>
		</AccordionContent>
	</AccordionItem>
)

const styles = tv({
	slots: {
		card: 'bg-transparent px-0',
		trigger: 'px-0 py-12 hover:no-underline',
		title: 'text-left translate-y-1 group-hover/accordion-trigger:text-gradient group-[[data-state=open]]/accordion-trigger:text-gradient',
		closeIcon: 'flex-none bg-white/10 group-hover/accordion-trigger:text-secondary group-[[data-state=open]]/accordion-trigger:text-secondary',

		content: 'px-0',
		markdown: 'flex max-w-prose flex-col gap-y-3',
	},
})()

export { FaqCard }
