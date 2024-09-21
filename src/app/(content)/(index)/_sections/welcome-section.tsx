import { Spacer } from '~/components/ui/spacer'
import { Text, Title } from '~/components/ui/text'
import { Section, type SectionProps } from '~/components/(sections)'

import { ServicesCarousel } from '~/modules/services-carousel'

import { SplineBackground } from './spline-background'

const WelcomeSection = (props: SectionProps) => (
	<Section {...props}>
		<Title
			as="h1"
			color="primary"
		>
			Веб-Студия
		</Title>
		<Text
			as="h3"
			font="bebas"
		>
			Полного цикла
		</Text>

		<Spacer y="2.5rem" />

		<ServicesCarousel />

		<SplineBackground />
	</Section>
)

export { WelcomeSection }
