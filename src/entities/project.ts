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

type ProjectFile = { label: string }

type ProjectBlock = {
	blocks: string[]
	image?: string
	files?: ProjectFile[]
}

type Project = {
	// shared
	id: string
	slug: string

	type: keyof typeof ProjectType
	purpose: keyof typeof ProjectPurpose

	company: { name: string; logo: string }

	// bried
	cover: string
	name: string
	description: string

	// full page
	title: string
	showImage?: boolean
	previewUrl?: string

	services: string[]
	problems: { problem: string; solution: string }[]
	overview: { title: string; blocks: string[] }
	business: { blocks: string[]; role: string[] }
	research: { blocks: string[]; files: ProjectFile[] }
	development: { blocks: string[]; files: ProjectFile[] }
	features: { blocks: string[]; files: ProjectFile[] }
	result: { title: string; blocks: string[] }
}

export type { Project }
export { ProjectType, ProjectPurpose }
