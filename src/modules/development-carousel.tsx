import { developmentCardsConfig } from '~/config/development'

import { CarouselSection } from '~/components/(sections)/carousel-section'

const DevelopmentCarousel = () => (
	<CarouselSection
		items={[
			developmentCardsConfig.landing,
			developmentCardsConfig.corporate,
			developmentCardsConfig.portal,
			developmentCardsConfig.service,
		]}
	/>
)

export { DevelopmentCarousel }
