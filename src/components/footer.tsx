import { Button } from '~/components/ui/button'

import { Section } from '~/components/section'
import { FeedSection } from '~/components/feed-section'

const Footer = () => {
	return (
		<div>
			<FeedSection />
			<Section
				bg="bg-content-200"
				className="flex items-center justify-center p-9"
			></Section>
		</div>
	)
}

export { Footer }
