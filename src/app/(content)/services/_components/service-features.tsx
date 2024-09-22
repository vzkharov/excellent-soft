import { tv } from 'tailwind-variants'

import { Card } from '~/components/ui/card'

type ServiceFeature = {
	title: string
	content: string
}

type ServiceFeaturesProps = {
	items: ServiceFeature[]
}

const ServiceFeatures = ({ items }: ServiceFeaturesProps) => (
	<section className={styles.grid()}>
		{items.map((feature, idx) => (
			<Card
				key={[idx, 'feature'].join('-')}
				size="md"
				variant="outlined"
				title={feature.title}
			>
				{feature.content}
			</Card>
		))}
	</section>
)

const styles = tv({
	slots: {
		grid: 'grid md:grid-cols-2 gap-6',
	},
})()

export { ServiceFeatures }
export type { ServiceFeature }
