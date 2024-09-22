import Spline from '@splinetool/react-spline/next'

import { BackgroundImage } from '~/components/background-image'

/**
 * @fix with background-image
 */
const SplineBackground = () => (
	<BackgroundImage>
		{/* <video
			preload="metadata"
			src="/bg.mp4"
			muted
			playsInline
			loop
			autoPlay
			className="h-full w-full object-cover opacity-50"
		/> */}
		<Spline
			scene="/bg.spline"
			className="block h-full w-full"
		/>
	</BackgroundImage>
)

export { SplineBackground }
