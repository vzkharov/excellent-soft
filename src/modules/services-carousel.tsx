import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'

import { serviceConfig } from '~/config/services'

import { ServiceCard } from '~/components/(cards)/service-card'
import { Carousel, CarouselContent, CarouselItem } from '~/components/ui/carousel'

const ServicesCarousel = (props: StyleProps) => (
	<Carousel {...props}>
		<CarouselContent>
			{[
				serviceConfig.audit,
				serviceConfig.design,
				serviceConfig.development,
				serviceConfig.promotion,
			].map((card, idx) => (
				<CarouselItem
					key={card.id}
					className={styles.item()}
				>
					<ServiceCard
						{...card}
						step={idx + 1}
						className={styles.card()}
					/>
				</CarouselItem>
			))}
		</CarouselContent>
	</Carousel>
)

const styles = tv({
	slots: {
		card: 'h-fit',
		item: 'w-72 even:mt-20',
	},
})()

export { ServicesCarousel }
