'use server'

import { HUB_SPOT_TO_EMAIL, HUB_SPOT_FROM_EMAIL, HUB_SPOT_TITLE, HUB_SPOT_SUBJECT } from '~/env'

import { resend } from '~/lib/resend'
import { extractFormData } from '~/helpers/form'

import ContactEmail from '~/emails/contact-email'

import type { HubSpotState } from './types'

const submitHubspot = async (formData: FormData) => {
	const body = extractFormData<HubSpotState>(formData)

	if (!body.email && !body.phone) {
		throw new Error('Заполните форму!')
	}

	if (!HUB_SPOT_FROM_EMAIL || !HUB_SPOT_TO_EMAIL) {
		throw new Error('Что-то пошло не так. Подождите пока мы это исправим')
	}

	const { error } = await resend.emails.send({
		from: `${HUB_SPOT_TITLE} <${HUB_SPOT_FROM_EMAIL}>`,
		to: [HUB_SPOT_TO_EMAIL],
		subject: HUB_SPOT_SUBJECT,
		react: ContactEmail(body),
	})

	if (error) {
		throw new Error('Что-то пошло не так. Попробуйте еще раз.')
	}

	return { status: 200, message: 'Ваша заявка принята и находится в обработке!' }
}

export { submitHubspot }
