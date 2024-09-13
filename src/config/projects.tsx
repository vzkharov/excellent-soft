import { ProjectType, ProjectPurpose, type Project } from '~/entities/project'

type ProjectFilterConfig = {
	name: string
	value: string
}

const projectTypeConfig: Record<ProjectType, ProjectFilterConfig> = {
	[ProjectType.Landing]: {
		name: 'Лендинги',
		value: ProjectType.Landing,
	},
	[ProjectType.Commercial]: {
		name: 'Корпоративные сайты',
		value: ProjectType.Commercial,
	},
	[ProjectType.eShop]: {
		name: 'Интернет магазины',
		value: ProjectType.eShop,
	},
	[ProjectType.Portal]: {
		name: 'Порталы и сервисы',
		value: ProjectType.Portal,
	},
	[ProjectType.Design]: {
		name: 'Веб дизайн',
		value: ProjectType.Design,
	},
	[ProjectType.Identic]: {
		name: 'Айдентика',
		value: ProjectType.Identic,
	},
}

const projectPurposeConfig: Record<ProjectPurpose, ProjectFilterConfig> = {
	[ProjectPurpose.Health]: {
		name: 'Здоровье',
		value: ProjectPurpose.Health,
	},
	[ProjectPurpose.Education]: {
		name: 'Образование',
		value: ProjectPurpose.Education,
	},
	[ProjectPurpose.Industrial]: {
		name: 'Промышленность',
		value: ProjectPurpose.Industrial,
	},
	[ProjectPurpose.Building]: {
		name: 'Строительство и ремонт',
		value: ProjectPurpose.Building,
	},
	[ProjectPurpose.eCommerce]: {
		name: 'eCommerce',
		value: ProjectPurpose.eCommerce,
	},
	[ProjectPurpose.Tourism]: {
		name: 'Туризм',
		value: ProjectPurpose.Tourism,
	},
	[ProjectPurpose.B2B]: {
		name: 'B2B сайты',
		value: ProjectPurpose.B2B,
	},
}

const projectsConfig: Project[] = [
	{
		id: 'belshowtex',
		type: ProjectType.Landing,
		purpose: ProjectPurpose.Tourism,
		image: '/projects/belshowtex.png',
		companyLogo: '/companies/belshowtex.png',
		title: 'Сценическое оборудование',
		description: 'Корпоративный веб-сайт с каталогом  образцов',
	},
	{
		id: 'img-print',
		type: ProjectType.Design,
		purpose: ProjectPurpose.eCommerce,
		image: '/projects/img-print.png',
		companyLogo: '/companies/img-print.png',
		title: 'Сайт - каталог производителя одежды',
		description: 'Корпоративный веб-сайт с каталогом  и ценами',
	},
	{
		id: 'bro-graphics',
		type: ProjectType.Design,
		purpose: ProjectPurpose.eCommerce,
		image: '/projects/bro-graphics.png',
		companyLogo: '/companies/bro-graphics.png',
		title: 'Сайт агентства дизайна интерьера',
		description: 'Корпоративный веб-сайт',
	},
	{
		id: 'sarpedor-hotel',
		type: ProjectType.Commercial,
		purpose: ProjectPurpose.Tourism,
		image: '/projects/sarpedor-hotel.png',
		companyLogo: '/companies/sarpedor-hotel.png',
		title: 'Промо - сайт отеля',
		description: 'Отель на побережье Антальи',
	},
]

export { projectsConfig, projectTypeConfig, projectPurposeConfig }
