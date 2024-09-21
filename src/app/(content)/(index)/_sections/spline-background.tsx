import Spline from '@splinetool/react-spline/next'

import { cn } from '~/lib/utils'

/**
 * @fix with background-image
 */
const SplineBackground = () => {
	return (
		<div className={cn('pointer-events-none absolute left-0 top-0 -z-10 flex h-[90vh] w-screen bg-black')}>
			<Spline
				scene="/bg.splinecode"
				className={cn('block h-full w-full')}
			/>
		</div>
	)
}

export { SplineBackground }
