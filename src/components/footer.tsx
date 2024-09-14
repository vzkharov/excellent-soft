import { Section } from '~/components/section'
import { FeedSection } from '~/components/(sections)/feed-section'

const Footer = () => {
	return (
		<div>
			<FeedSection />
			<Section
				bg="bg-gradient-to-r from-gray-200 to-dark"
				className="flex items-center justify-center p-9"
			></Section>
		</div>
	)
}

export { Footer }
