import { Section } from '~/components/section'
import { FeedSection } from '~/components/(sections)/feed-section'

const Footer = () => {
	return (
		<div>
			<FeedSection />
			<Section
				bg="bg-gray-200"
				className="flex items-center justify-center p-9"
			></Section>
		</div>
	)
}

export { Footer }
