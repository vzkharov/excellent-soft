'use client'

import { useCallback } from 'react'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { useCookie, type SetCookieOptions } from '~/hooks/use-cookie'
import { useResponsive } from '~/hooks/use-responsive'

import { CookiesBanner } from './cookies-banner'

const Cookies = ({ style, className }: StyleProps) => {
	const { isDesktop } = useResponsive()
	const [agreed, setAgreed] = useCookie<boolean>(COOKIES_AGREED_KEY)

	const confirm = useCallback(() => {
		setAgreed(true, cookieOptions)
	}, [setAgreed])

	if (agreed) {
		return null
	}

	return (
		<div
			key="cookies"
			style={{
				...style,
				paddingBottom: isDesktop ? 20 : 0,
			}}
			className={cn(
				'z-50 fixed inset-x-0 bottom-0 mx-auto md:max-w-3xl lg:max-w-5xl h-fit',
				className,
			)}
		>
			<CookiesBanner confirm={confirm} />
		</div>
	)
}

const COOKIES_AGREED_KEY = 'cookies_agreed'
const ONE_YEAR_IN_MS = 365 * 24 * 60 * 60 * 1000

const cookieOptions: SetCookieOptions = {
	sameSite: 'lax',
	maxAge: ONE_YEAR_IN_MS,
}

export { Cookies }
