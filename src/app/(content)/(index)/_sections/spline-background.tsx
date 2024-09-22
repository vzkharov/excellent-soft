import Spline from '@splinetool/react-spline/next'

import { BackgroundImage } from '~/components/background-image'

/**
 * @fix with background-image
 */
const SplineBackground = () => (
	<BackgroundImage>
		<Spline
			scene="/bg.spline"
			// scene="https://prod.spline.design/boAM3jpff2108QBc/scene.splinecode"
			// scene="https://prod.spline.design/lVbKY2OJwE1l6i34/scene.splinecode"
			className="block h-full w-full opacity-100"
		/>
	</BackgroundImage>
)

export { SplineBackground }
