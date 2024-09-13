enum ProjectType {
	Landing = 'Landing',
	Commercial = 'Commercial',
	eShop = 'eShop',
	Portal = 'Portal',
	Design = 'Design',
	Identic = 'Identic',
}

enum ProjectPurpose {
	Health = 'Health',
	Education = 'Education',
	Industrial = 'Industrial',
	Building = 'Building',
	eCommerce = 'eCommerce',
	Tourism = 'Tourism',
	B2B = 'B2B',
}

type Project = {
	id: string

	type: keyof typeof ProjectType
	purpose: keyof typeof ProjectPurpose

	image: string
	companyLogo: string
	title: string
	description: string

	url?: string
}

export type { Project }
export { ProjectType, ProjectPurpose }
