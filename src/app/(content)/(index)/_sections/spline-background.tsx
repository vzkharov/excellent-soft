import { BackgroundImage } from '~/components/background-image'

/**
 * @fix with background-image
 */
const SplineBackground = () => (
	<BackgroundImage>
		<video
			preload="metadata"
			src="/spline.mp4"
			muted
			playsInline
			loop
			autoPlay
			className="h-full w-full object-cover"
		/>
	</BackgroundImage>
)

export { SplineBackground }
