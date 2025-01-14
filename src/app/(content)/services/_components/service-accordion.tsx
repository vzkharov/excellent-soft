import { cn } from '~/lib/utils'
import type { StyleProps, ReactChildren } from '~/lib/types'

import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
	AccordionCloseIcon,
} from '~/components/ui/accordion'
import { Spacer } from '~/components/ui/spacer'
import { FeedButton } from '~/components/(buttons)/feed-button'

type ServiceAccordionProps = StyleProps & { children: ReactChildren; defaultValue?: string[] }

const ServiceAccordion = ({ children, className, defaultValue, ...props }: ServiceAccordionProps) => (
	<Accordion
		{...props}
		type="multiple"
		className={cn('space-y-2', className)}
		defaultValue={defaultValue}
	>
		{children}
	</Accordion>
)

type ServiceAccordionItemProps = {
	title: string
	value: string
	children?: ReactChildren
}

const ServiceAccordionItem = ({ value, title, children }: ServiceAccordionItemProps) => (
	<AccordionItem value={value}>
		<AccordionTrigger
			id={value}
			aria-label={title}
			className="max-md:px-6"
		>
			<span className="translate-y-1.5">{title}</span>
			<AccordionCloseIcon />
		</AccordionTrigger>
		<AccordionContent className="max-md:px-6">
			{children}
			<Spacer y="xl" />
			<FeedButton
				bold
				variant="primary"
			/>
		</AccordionContent>
	</AccordionItem>
)

export { ServiceAccordion, ServiceAccordionItem }
