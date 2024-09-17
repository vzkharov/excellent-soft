'use server'

import type { ContactState } from './types'

const submitHubspot = async (formData: FormData) => {
	'use server'
	const data = Array.from(formData.entries()).reduce<ContactState>((acc, [name, value]) => {
		// @ts-expect-error
		acc[name] = value
		return acc
	}, {} as ContactState)

	console.log('>> submit `contact-form` with:', JSON.stringify(data, null, 2))
}

export { submitHubspot }
