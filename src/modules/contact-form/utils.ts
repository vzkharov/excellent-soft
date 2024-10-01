import type { HubSpotFields } from '../hub-spot-form/types'

type FormConfig = {
	type?: string
	required?: boolean

	name: HubSpotFields
	placeholder: string
}

const formConfig = [
	{
		required: true,
		type: 'name',
		name: 'name',
		placeholder: 'Ваше имя',
	},
	{
		type: 'tel',
		name: 'phone',
		placeholder: 'Телефон/WhatsApp/Telegram',
	},
	{
		required: true,
		type: 'email',
		name: 'email',
		placeholder: 'Ваш e-mail',
	},
	{
		type: 'text',
		name: 'details',
		placeholder: 'Подробности проекта',
	},
	{
		type: 'text',
		name: 'referral',
		placeholder: 'Как вы узнали о нас?',
	},
] satisfies FormConfig[]

export { formConfig }
