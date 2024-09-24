import { Title } from '~/components/ui/text'
import { Spacer } from '~/components/ui/spacer'
import { Carousel, CarouselContent, CarouselControls, CarouselItem } from '~/components/ui/carousel'

import { CarouselCard, type CarouselCardConfig } from '~/components/(cards)/carousel-card'

type CarouselSectionProps = {
	items: CarouselCardConfig[]
}

const CarouselSection = ({ items }: CarouselSectionProps) => (
	<Carousel opts={{ align: 'start' }}>
		<Title as="h3">Примеры того как это может выглядеть</Title>
		<Spacer y="3xl" />
		<CarouselContent>
			{items.map((card) => (
				<CarouselItem key={card.id}>
					<CarouselCard {...card} />
				</CarouselItem>
			))}
		</CarouselContent>
		<Spacer y="3xl" />
		<CarouselControls />
	</Carousel>
)

export { CarouselSection }
export type { CarouselSectionProps }
