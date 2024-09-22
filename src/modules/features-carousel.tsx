import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'
import { featuresConfig } from '~/config/development'

import { Title } from '~/components/ui/text'
import { FeatureCard } from '~/components/(cards)/feature-card'
import { Carousel, CarouselContent, CarouselItem } from '~/components/ui/carousel'

const FeaturesCarousel = ({ className, ...props }: StyleProps) => (
	<div
		{...props}
		className={styles.section()}
	>
		<Title as="h2">
			Какие <span className="text-primary">фичи</span> реализуем?
		</Title>

		<Carousel className={styles.carousel()}>
			<CarouselContent>
				{featuresConfig.map((card, idx) => (
					<CarouselItem key={card.id}>
						<FeatureCard
							{...card}
							step={idx + 1}
							className={styles.card()}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	</div>
)

const styles = tv({
	slots: {
		section: "relative text-center overflow-hidden flex flex-col items-center justify-center gap-10 rounded-md bg-black/20 py-36 after:absolute after:bottom-0 after:h-px after:w-full after:max-w-screen-md after:bg-primary after:content-['']",
		carousel: 'max-w-screen-md',

		card: 'w-[174px]',
	},
})()

export { FeaturesCarousel }
