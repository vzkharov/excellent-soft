'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import type { Provider } from '~/lib/types'
import { navigation } from '~/config/navigation'

const pageColors: Record<string, string> = {
	DEFAULT: 'bg-white',
	[navigation.index.href]: 'bg-gray-100',
	[navigation.contact.href]: 'bg-gray-100',
	[navigation.payment.href]: 'bg-gray-100',
}

const BodyColorProvider: Provider = ({ children }) => {
	const pathname = usePathname()

	useEffect(() => {
		document.body.className = document.body.className
			.split(' ')
			.filter((className) => !className.startsWith('bg-'))
			.join(' ')

		const bgClassName = pageColors[pathname] || pageColors.DEFAULT

		if (bgClassName) {
			document.body.classList.add(bgClassName)
		}
	}, [pathname])

	return <div>{children}</div>
}

export { BodyColorProvider }
