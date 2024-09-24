import { Title } from '~/components/ui/text'
import { Spacer } from '~/components/ui/spacer'

import { ServicesCarousel } from '~/modules/services-carousel'

import { SplineBackground } from './spline-background'

const WelcomeSection = () => (
	<>
		<Title
			as="h1"
			color="primary"
		>
			Веб-Студия
		</Title>
		<Title as="h3">Полного цикла</Title>
		<Spacer y="2xl" />
		<ServicesCarousel />

		{/**
		 * @description background video
		 */}
		<SplineBackground />
	</>
)

export { WelcomeSection }
