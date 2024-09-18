import { Title } from '~/components/ui/text'
import { Spacer } from '~/components/ui/spacer'
import { Carousel, CarouselContent, CarouselControls, CarouselItem } from '~/components/ui/carousel'

import { Section } from '~/components/section'
import { CarouselCard, type CarouselCardConfig } from '~/components/carousel-card'

type CarouselSectionProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
	items: CarouselCardConfig[]
}

const CarouselSection = ({ items, ...props }: CarouselSectionProps) => (
	<Section {...props}>
		<Carousel opts={{ align: 'start' }}>
			<Title as="h3">Примеры того как это может выглядеть</Title>
			<Spacer y="4rem" />
			<CarouselContent>
				{items.map((card) => (
					<CarouselItem key={card.id}>
						<CarouselCard {...card} />
					</CarouselItem>
				))}
			</CarouselContent>
			<Spacer y="4rem" />
			<CarouselControls />
		</Carousel>
	</Section>
)

export { CarouselSection }
export type { CarouselSectionProps }
