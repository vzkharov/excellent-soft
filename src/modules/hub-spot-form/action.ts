'use server'

import { HUB_SPOT_TO_EMAIL, HUB_SPOT_FROM_EMAIL, HUB_SPOT_TITLE, HUB_SPOT_SUBJECT } from '~/env'

import { resend } from '~/lib/resend'
import { extractFormData } from '~/helpers/form'

import ContactEmail from '~/emails/contact-email'

import type { HubSpotState } from './types'

type Response = { success: boolean; status: number; message: string }

const submitHubspot = async (formData: FormData): Promise<Response> => {
	const body = extractFormData<HubSpotState>(formData)

	if (!body.email && !body.phone) {
		return constructResponse(false, messages.validationError)
	}

	if (!HUB_SPOT_FROM_EMAIL || !HUB_SPOT_TO_EMAIL) {
		return constructResponse(false, messages.variablesError)
	}

	const { error } = await resend.emails.send({
		from: `${HUB_SPOT_TITLE} <${HUB_SPOT_FROM_EMAIL}>`,
		to: [HUB_SPOT_TO_EMAIL],
		subject: HUB_SPOT_SUBJECT,
		react: ContactEmail(body),
	})

	if (error) {
		return constructResponse(false, messages.internalError)
	}

	return constructResponse(true, messages.success)
}

const constructResponse = (success: boolean, message: string) => ({
	message,
	success,
	status: success ? 200 : 400,
})

const messages = {
	variablesError: 'Подождите пока мы это исправим.',
	internalError: 'Попробуйте еще раз чуть позже.',
	validationError: 'Проверьте указаны ли все необходимые поля.',

	success: 'Ваша заявка принята и находится в обработке.',
} as const

export { submitHubspot }
