'use client'

import { toast } from 'sonner'
import { FormEventHandler, useCallback, useRef } from 'react'
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
	const formRef = useRef<HTMLFormElement>(null)
	const handleSubmit = useCallback(
		async (formData: FormData) => {
			const promise = submitHubspot(formData)

			const toastId = toast.loading('Загрузка...', {
				description: 'Отправляем Вашу заявку на сервер...',
			})

			await promise
				.then((data) => {
					const success = data.success

					if (success) {
						toast.success('Успешно!', { id: toastId, description: data.message })
						formRef.current?.reset()
						onSuccess?.()
					} else {
						toast.error('Что-то пошло не так', {
							id: toastId,
							description: data.message,
						})
						onError?.()
					}
				})
				.finally(onSettled)
		},
		[onError, onSuccess, onSettled],
	)

	return (
		<form
			ref={formRef}
			{...props}
			action={handleSubmit}
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
