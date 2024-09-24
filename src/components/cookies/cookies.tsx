'use client'

import { useCallback } from 'react'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { useCookie, type SetCookieOptions } from '~/hooks/use-cookie'

import { CookiesBanner } from './cookies-banner'

const Cookies = ({ style, className }: StyleProps) => {
	const [agreed, setAgreed] = useCookie<boolean>(COOKIES_AGREED_KEY)

	const confirm = useCallback(() => {
		setAgreed(true, cookieOptions)
	}, [setAgreed])

	console.log(agreed)

	return (
		<div
			id={COOKIES_ID}
			style={style}
			className={cn(
				'fixed inset-x-0 bottom-0 z-50 mx-auto h-fit max-w-2xl translate-y-48 sm:pb-5',
				agreed ? '' : 'translate-y-0',
				'transition-transform duration-300 ease-out',
				className,
			)}
		>
			<CookiesBanner confirm={confirm} />
		</div>
	)
}

const COOKIES_ID = 'cookies'
const COOKIES_AGREED_KEY = 'cookies_agreed'
const ONE_YEAR_IN_MS = 365 * 24 * 60 * 60 * 1000

const cookieOptions: SetCookieOptions = {
	sameSite: 'lax',
	maxAge: ONE_YEAR_IN_MS,
}

export { Cookies }
