'use client'

import { useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'
import { TRANSTION_TRANSLATES } from '~/lib/framer-motion'

import { useCookie } from '~/hooks/use-cookie'
import { useResponsive } from '~/hooks/use-responsive'

import { CookiesBanner } from './cookies-banner'

type CookiesProps = StyleProps & {
	hide?: boolean
}

const Cookies = ({ style, className, hide = false }: CookiesProps) => {
	const [agreed, setAgreed] = useCookie<boolean>(COOKIES_AGREED_KEY)
	const { isDesktop } = useResponsive()

	const confirm = useCallback(() => {
		setAgreed(true, {
			sameSite: 'lax',
			maxAge: ONE_YEAR_IN_MS,
		})
	}, [setAgreed])

	const show = !hide && !agreed

	return (
		<AnimatePresence initial={show}>
			{show ? (
				<motion.div
					key="cookies"
					exit="exit"
					initial="exit"
					animate="enter"
					variants={TRANSTION_TRANSLATES.bottom}
					style={{
						...style,
						paddingBottom: isDesktop ? 20 : 0,
					}}
					className={cn(
						'z-50 fixed inset-x-0 bottom-0 mx-auto md:max-w-3xl lg:max-w-5xl h-fit',
						className,
					)}
				>
					<CookiesBanner
						show
						confirm={confirm}
					/>
					<div className="absolute bg-black h-6 inset-x-0 -z-10 bottom-0 md:hidden" />
				</motion.div>
			) : null}
		</AnimatePresence>
	)
}

const COOKIES_AGREED_KEY = 'cookies_agreed'
const ONE_YEAR_IN_MS = 365 * 24 * 60 * 1000 * 1000

export { Cookies }
export type { CookiesProps }
