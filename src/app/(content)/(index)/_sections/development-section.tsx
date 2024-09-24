import { Spacer } from '~/components/ui/spacer'
import { Text, Title } from '~/components/ui/text'

import { Jobs } from '~/modules/jobs-section'
import { FeaturesCarousel } from '~/modules/features-carousel'

const DevelopmentSection = () => (
	<>
		<Title as="h2">
			Сайты и веб сервисы «под ключ» <br /> любой сложности
		</Title>
		<Spacer y="lg" />
		<Text bold>От базового предложения до кастомной разработки </Text>
		<Spacer y="3xl" />
		<Jobs />
		<Spacer y="xl" />
		<FeaturesCarousel />
	</>
)

export { DevelopmentSection }
