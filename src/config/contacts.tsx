type ContactOptionConfig = {
	type: 'phone' | 'mail'
	value: string
}

type ContactConfig = {
	title: string
	options: ContactOptionConfig[]
}

const CONTACTS_CONFIG = [] satisfies ContactConfig[]

export { CONTACTS_CONFIG }
export type { ContactConfig, ContactOptionConfig }
