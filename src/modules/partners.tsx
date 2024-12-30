import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'
import { partnersConfig } from '~/config/partners'

import { Section } from '~/components/(sections)'
import { PartnerCard } from '~/components/(cards)/partner-card'
import { Title } from '~/components/ui/text'

const PartnerSection = ({ className, ...props }: StyleProps) => (
	<>
		<Section
			{...props}
			color="black"
		>
			<Title
				as="h2"
				className={styles.title()}
				color="foreground"
			>
				с какими <span className="text-primary">доменами</span> работаем
			</Title>
		</Section>

		{partnersConfig.map((card) => (
			<PartnerCard
				key={card.id}
				{...card}
			/>
		))}
	</>
)

const styles = tv({
	slots: {
		title: 'pb-20 pt-24',
	},
})()

export { PartnerSection }
