import { Spacer } from '~/components/ui/spacer'
import { Text, Title } from '~/components/ui/text'

import { Section, SectionProps } from '~/components/(sections)'

import { Jobs } from '~/modules/jobs-section'
import { FeaturesCarousel } from '~/modules/features-carousel'

const DevelopmentSection = (props: SectionProps) => (
	<Section
		color="dark"
		{...props}
	>
		<Title as="h2">
			Сайты и веб сервисы «под ключ» <br /> любой сложности
		</Title>
		<Spacer y="1.25rem" />
		<Text bold>От базового предложения до кастомной разработки </Text>
		<Spacer y="4rem" />
		<Jobs />
		<Spacer y="2rem" />
		<FeaturesCarousel />
	</Section>
)

export { DevelopmentSection }
