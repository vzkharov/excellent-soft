import { BackgroundImage } from '~/components/background-image'

const SplineBackground = () => (
	<BackgroundImage>
		<video
			loop
			muted
			autoPlay
			playsInline
			src="/bg.mp4"
			preload="metadata"
			className="h-full w-full object-cover"
		/>
	</BackgroundImage>
)

export { SplineBackground }
