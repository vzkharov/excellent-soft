import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'
import { partnersConfig } from '~/config/partners'

import { Section } from '~/components/(sections)'
import { PartnerCard } from '~/components/(cards)/partner-card'

const PartnerSection = ({ className, ...props }: StyleProps) => (
	<>
		<Section
			{...props}
			color="dark"
			title="Наши клиенты"
			className={styles.title({ className })}
		/>

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
		title: 'pb-6 pt-24',
	},
})()

export { PartnerSection }
