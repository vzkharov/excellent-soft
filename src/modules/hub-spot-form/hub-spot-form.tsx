'use client'

import { toast } from 'sonner'
import { useCallback, type FormEvent } from 'react'
import { useFormStatus } from 'react-dom'

import type { MergeWithHTMLProps } from '~/lib/types'

import { Button, type ButtonProps } from '~/components/ui/button'

import { submitHubspot } from './action'

type Props = Partial<{
	onSettled: () => Promise<unknown> | unknown
	onError: () => Promise<unknown> | unknown
	onSuccess: () => Promise<unknown> | unknown
}>

type HubSpotFormProps = MergeWithHTMLProps<'form', Props>

const HubSpotForm = ({ children, onError, onSuccess, onSettled, ...props }: HubSpotFormProps) => {
	const handleSubmit = useCallback(
		async (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault()

			onSettled?.()

			const formData = new FormData(e.currentTarget)
			const promise = submitHubspot(formData)

			toast.promise(promise, {
				loading: 'Отправляем Вашу заявку в обработку...',
				error: 'Ваша заявка принята и находится в обработке!',
				success: 'Ваша заявка принята и находится в обработке!',
			})

			await promise.then(onSuccess).catch(onError)
		},
		[onError, onSuccess, onSettled],
	)

	return (
		<form
			{...props}
			onSubmit={handleSubmit}
		>
			{children}
		</form>
	)
}

const SubmitButton = ({ children, ...props }: ButtonProps) => {
	const { pending } = useFormStatus()

	return (
		<Button
			{...props}
			disabled={pending}
		>
			{pending ? 'Идет отправка...' : children}
		</Button>
	)
}

export { HubSpotForm, SubmitButton }
export type { HubSpotFormProps }
