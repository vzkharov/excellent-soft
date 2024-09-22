import Spline from '@splinetool/react-spline/next'
import { Image } from '~/components/ui/image'

import { cn } from '~/lib/utils'

/**
 * @fix with background-image
 */
const SplineBackground = () => {
	return (
		<div className={cn('pointer-events-none absolute left-0 top-0 -z-10 flex h-[90vh] w-screen bg-dark')}>
			<Spline
				// scene="/bg.splinecode"
				scene="https://prod.spline.design/QggeKkyS8a-hKdsk/scene.splinecode"
				className={cn('block h-full w-full opacity-50')}
			/>
		</div>
	)
}

export { SplineBackground }
