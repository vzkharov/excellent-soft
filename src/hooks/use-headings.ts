'use client'

import { useEffect, useRef, useState, useTransition } from 'react'

type HeadingConfig = {
	id: string
	title: string
	level: number
}

const useHeadings = (_levels: number[] = [1, 2, 3, 4, 5, 6]) => {
	const levels = useRef(_levels)

	const [headings, setHeadings] = useState<HeadingConfig[]>([])
	const [isPending, startTransition] = useTransition()

	useEffect(() => {
		startTransition(() => {
			const elements = Array.from(
				document.querySelectorAll(levels.current.map((level) => 'h' + level).join(', ')),
			)
			const headingData = elements.map((element) => ({
				id: element.id,
				title: element.innerHTML,
				level: Number(element.tagName.charAt(1)),
			}))
			setHeadings(headingData)
		})
	}, [])

	return [headings, isPending] as const
}

export { useHeadings }
