import { processConfig } from '../_data'

import { Title } from '~/components/ui/text'
import { ProcessCard } from '../_components/process-card'

const ProcessSection = () => (
	<>
		<Title
			as="h2"
			id="process"
			className="pb-20 pt-24"
			color="foreground"
		>
			процесс создания
			<span className="text-primary"> web 3</span> ui/ux
		</Title>

		{processConfig.map((card) => (
			<ProcessCard
				key={card.id}
				{...card}
			/>
		))}
	</>
)

export { ProcessSection }
