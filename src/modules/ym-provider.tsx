// @ts-nocheck

'use client'

import { useEffect } from 'react'

declare global {
	interface Window {
		ym: (id: number, method: string, ...args: any[]) => void
	}
}

const YandexMetrica = ({ counterId }: { counterId: string }) => {
	useEffect(() => {
		// Load Yandex Metrica script
		;(function (m, e, t, r, i, k, a) {
			m[i] =
				m[i] ||
				function () {
					;(m[i].a = m[i].a || []).push(arguments)
				}
			m[i].l = 1 * new Date()
			for (var j = 0; j < document.scripts.length; j++) {
				if (document.scripts[j].src === r) {
					return
				}
			}
			;(k = e.createElement(t)),
				(a = e.getElementsByTagName(t)[0]),
				(k.async = 1),
				(k.src = r),
				a.parentNode.insertBefore(k, a)
		})(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym')

		// Initialize Yandex Metrica
		window.ym(parseInt(counterId), 'init', {
			clickmap: true,
			trackLinks: true,
			accurateTrackBounce: true,
		})
	}, [counterId])

	return null
}

export { YandexMetrica }
