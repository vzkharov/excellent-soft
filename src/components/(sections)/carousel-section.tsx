import { Title } from '~/components/ui/text'
import { Spacer } from '~/components/ui/spacer'
import { Carousel, CarouselContent, CarouselControls, CarouselItem } from '~/components/ui/carousel'

import { CarouselCard, type CarouselCardConfig } from '~/components/(cards)/carousel-card'

import { Section, type SectionProps } from './index'

type CarouselSectionProps = Omit<SectionProps, 'children'> & {
	items: CarouselCardConfig[]
}

const CarouselSection = ({ items, ...props }: CarouselSectionProps) => (
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
)

export { CarouselSection }
export type { CarouselSectionProps }
