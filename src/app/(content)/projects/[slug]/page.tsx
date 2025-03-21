import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import type { Page } from '~/lib/types'
import { createMetadata } from '~/lib/metadata'

import { projectsConfig } from '~/config/projects'

import { Title } from '~/components/ui/text'
import { Section } from '~/components/(sections)'
import { NavigationTabs } from '~/components/navigation-tabs'

import { ProjectCover } from './_sections/project-cover'
import { ProjectResults } from './_sections/project-result'
import { ProjectBusiness } from './_sections/project-business'
import { ProjectProblems } from './_sections/project-problems'
import { ProjectResearch } from './_sections/project-research'
import { ProjectFeatures } from './_sections/project-features'
import { ProjectOverview } from './_sections/project-overview'
import { ProjectDevelopment } from './_sections/project-development'

type Params = {
	slug: string
}

const ProjectsPage: Page<Params> = async ({ params }) => {
	const slug = params.slug

	const project = projectsConfig.find((_project) => _project.slug === slug)

	if (!project) {
		redirect('/projects')
	}

	return (
		<>
			<Section>
				<NavigationTabs levels={[6]} />
			</Section>

			<Section>
				<Title as="h2">{project.title}</Title>
			</Section>

			{project.showImage ? (
				<Section>
					<ProjectCover {...project} />
				</Section>
			) : null}

			<Section>
				<ProjectOverview {...project} />
			</Section>

			<Section>
				<ProjectBusiness {...project} />
			</Section>

			<Section bg="bg-gray-900">
				<ProjectProblems {...project} />
			</Section>

			<Section>
				<ProjectResearch {...project} />
			</Section>

			<Section>
				<ProjectDevelopment {...project} />
			</Section>

			<Section>
				<ProjectFeatures {...project} />
			</Section>

			<Section>
				<ProjectResults {...project} />
			</Section>
		</>
	)
}

export const dynamic = 'force-static'
export const revalidate = false

export const generateStaticParams = (): Params[] => {
	const projects = projectsConfig

	return projects.map((project) => ({ slug: project.slug }))
}

export const generateMetadata = ({ params }: { params: Params }): Metadata => {
	const slug = params.slug

	const project = projectsConfig.find((_project) => _project.slug === slug)

	if (!project) {
		redirect('/projects')
	}

	return createMetadata({
		name: project.title,
		href: ['', 'projects', slug].join('/'),
		description: project.description,
	})
}

export default ProjectsPage
