'use client' // Error components must be Client Components

import Link from 'next/link'
import { useEffect, useCallback } from 'react'

import { Button } from '~/components/ui/button'

import { InternalErrorImage } from '~/components/(images)/internal-error'

type ErrorProps = {
	error: Error & { digest?: string }
	reset: () => void
}

const Error = ({ error, reset }: ErrorProps) => {
	const reload = useCallback(() => {
		reset()
		window.location.reload()
	}, [])

	useEffect(() => {
		console.info(error)
	}, [error])

	return (
		<>
			<InternalErrorImage />
			<Link href="/">
				<Button color="primary">Вернуться на главную</Button>
			</Link>
		</>
	)
}

export default Error
