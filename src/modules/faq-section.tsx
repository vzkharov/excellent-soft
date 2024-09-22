import { Fragment } from 'react'
import { tv } from 'tailwind-variants'

import { faqConfig } from '~/config/faq'

import { Accordion } from '~/components/ui/accordion'
import { Separator } from '~/components/ui/separator'

import { FaqCard } from '~/components/(cards)/faq-card'
import { Section, type SectionProps } from '~/components/(sections)'

const FaqSection = ({ className, ...props }: SectionProps) => (
	<Section
		color="metal"
		title="Чем поможем?"
		{...props}
		className={styles.section({ className })}
	>
		<Accordion
			type="single"
			className={styles.inner()}
		>
			{faqConfig.map((item) => (
				<Fragment key={item.id}>
					<Separator color="foreground" />
					<FaqCard {...item} />
				</Fragment>
			))}
			<Separator color="foreground" />
		</Accordion>
	</Section>
)

const styles = tv({
	slots: {
		section: 'py-24',
		inner: 'mt-8 space-y-2',
	},
})()

export { FaqSection }
