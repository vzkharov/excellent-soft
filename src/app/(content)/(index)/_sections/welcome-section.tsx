import { ServicesCarousel } from '~/modules/services-carousel'
import { Section, SectionProps } from '~/components/(sections)'
import { Spacer } from '~/components/ui/spacer'
import { Text, Title } from '~/components/ui/text'
import type { StyleProps } from '~/lib/types'
// import Spline from '@splinetool/react-spline/next'

const WelcomeSection = (props: SectionProps) => (
	<Section
		{...props}
		color="dark"
	>
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

		{/** fix with background-image */}
		<div className="pointer-events-none absolute inset-x-0 -top-12 -z-10 min-h-[900px] bg-dark">
			{/* <Spline
				renderOnDemand
				scene="https://prod.spline.design/TLlelIJUW1DDz3NQ/scene.splinecode"
			/> */}
		</div>
	</Section>
)

export { WelcomeSection }
