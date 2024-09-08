import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { Image, type ImageProps } from '~/components/ui/image'

type NoDataProps = {
	imgSize?: ImageProps['width']
}

const NoData = ({ style, className, imgSize = 350 }: StyleProps & NoDataProps) => (
	<article
		style={style}
		className={cn('w-full h-auto flex flex-col items-center', className)}
	>
		<Image
			alt="no-data"
			src="/no-data.svg"
			height={imgSize}
			style={{ width: 'auto', height: 300, ...style }}
		/>
	</article>
)

export { NoData }
export type { NoDataProps }
