import type { CSSProperties } from 'react'

import { cn } from '~/lib/utils'

type ImageProps = Omit<React.ComponentProps<'img'>, 'alt'> & {
	alt?: string
}

const Image = ({ style, className, src = '', alt = '', width = 1000, height = 1000, ...props }: ImageProps) => (
	// eslint-disable-next-line @next/next/no-img-element
	<img
		{...props}
		src={src}
		alt={alt}
		width={width}
		style={style}
		height={height}
		className={cn('h-auto w-full select-none object-cover', className)}
	/>
)

type AbsoluteImageProps = ImageProps &
	Partial<{
		top: CSSProperties['top']
		left: CSSProperties['left']
		right: CSSProperties['right']
		bottom: CSSProperties['bottom']
	}>

const AbsoluteImage = ({ alt, top, left, style, right, bottom, className, ...props }: AbsoluteImageProps) => (
	// eslint-disable-next-line @next/next/no-img-element
	<Image
		{...props}
		alt={alt}
		style={{ top, left, right, bottom, ...style }}
		className={cn('pointer-events-none absolute -z-50 select-none', className)}
	/>
)

export { Image, AbsoluteImage }
export type { ImageProps, AbsoluteImageProps }
