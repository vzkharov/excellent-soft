import type { CSSProperties } from 'react'
import NextImage, { type ImageProps as NextImageProps } from 'next/image'

import { cn } from '~/lib/utils'

type ImageProps = Omit<NextImageProps, 'alt'> & {
	alt?: string
}

const Image = ({ style, className, alt = '', width = 0, height = 0, ...props }: ImageProps) => (
	<NextImage
		{...props}
		alt={alt}
		width={width}
		style={style}
		height={height}
		className={cn('h-full w-auto', className)}
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
	<Image
		{...props}
		alt={alt}
		style={{ top, left, right, bottom, ...style }}
		className={cn('pointer-events-none select-none absolute -z-50', className)}
	/>
)

export { Image, AbsoluteImage }
export type { ImageProps, AbsoluteImageProps }
