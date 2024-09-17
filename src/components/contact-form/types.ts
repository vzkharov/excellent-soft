type ContactState = {
	name: string
	email: string

	phone?: string
	details?: string
	referral?: string
}

type ContactFields = keyof ContactState

export type { ContactState, ContactFields }
