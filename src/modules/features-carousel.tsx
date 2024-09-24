import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'
import { featuresConfig } from '~/config/development'

import { Title } from '~/components/ui/text'
import { FeatureCard } from '~/components/(cards)/feature-card'

const FeaturesCarousel = ({ className, ...props }: StyleProps) => (
	<div
		{...props}
		className={styles.section()}
	>
		<Title as="h2">
			Какие <span className="text-primary">фичи</span> реализуем?
		</Title>

		<div className={styles.grid()}>
			{featuresConfig.map((card, idx) => (
				<FeatureCard
					{...card}
					key={card.id}
					step={idx + 1}
				/>
			))}
		</div>
	</div>
)

const styles = tv({
	slots: {
		section: "relative text-center overflow-hidden flex flex-col items-center justify-center gap-10 rounded-md bg-black/20 py-24 md:py-36 after:absolute after:bottom-0 after:h-px after:w-full after:max-w-screen-md after:bg-primary after:content-['']",

		card: 'w-full',
		grid: 'max-w-screen-md grid grid-cols-2 gap-6 max-md:px-5 md:grid-cols-4',
	},
})()

export { FeaturesCarousel }
