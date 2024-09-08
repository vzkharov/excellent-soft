type NavLinkConfig = {
	href: string
	name: string
}

type NavConfig = {
	title: string
	options: NavLinkConfig[]
}

const APP_NAV_CONFIG = {
	title: 'Навигация',
	options: [],
} as NavConfig

const HEADER_NAV_CONFIG = {
	title: '',
	options: [],
} as NavConfig

export { APP_NAV_CONFIG, HEADER_NAV_CONFIG }
export type { NavConfig, NavLinkConfig }
