import type { StyleProps } from '~/lib/types'
import { jobsConfig } from '~/config/development'

import { DevelopJobCard } from '~/components/(cards)/develop-job-card'
import { Carousel, CarouselContent, CarouselItem } from '~/components/ui/carousel'

const Jobs = (props: StyleProps) => (
	<Carousel {...props}>
		<CarouselContent>
			{jobsConfig.map((card) => (
				<CarouselItem
					key={card.id}
					className="w-[288px]"
				>
					<DevelopJobCard {...card} />
				</CarouselItem>
			))}
		</CarouselContent>
	</Carousel>
)

export { Jobs }
