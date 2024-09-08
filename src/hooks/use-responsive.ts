'use client'

import { useMemo } from 'react'

import { useMediaQuery } from './use-media-query'

const useResponsive = (width: number | string = 767) => {
	const isTouch = useMediaQuery(width)
	return useMemo(() => ({ isTouch, isDesktop: !isTouch }), [isTouch])
}

export { useResponsive }
