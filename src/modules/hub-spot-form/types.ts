type HubSpotState = Partial<{
	name: string
	email: string
	phone: string
	details: string
	referral: string
}>

type HubSpotFields = keyof HubSpotState

export type { HubSpotState, HubSpotFields }
