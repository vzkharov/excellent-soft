import { designCardsConfig } from '~/config/design'

import { CarouselSection } from '~/components/(sections)/carousel-section'

const DesignCarousel = () => (
	<CarouselSection
		items={[
			designCardsConfig.mobile,
			designCardsConfig.dashboard,
			designCardsConfig.crm,
			designCardsConfig.mobile,
		]}
	/>
)

export { DesignCarousel }
