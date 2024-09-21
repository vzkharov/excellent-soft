import { cardsConfig } from '~/config/development'

import { CarouselSection } from '~/components/(sections)/carousel-section'

const DevelopmentCarousel = () => (
	<CarouselSection
		items={[cardsConfig.landing, cardsConfig.corporate, cardsConfig.portal, cardsConfig.service]}
	/>
)

export { DevelopmentCarousel }
