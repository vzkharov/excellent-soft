import { Suspense } from 'react'
import { tv } from 'tailwind-variants'

import type { Page } from '~/lib/types'

import { Title } from '~/components/ui/text'
import { Separator } from '~/components/ui/separator'
import { Section } from '~/components/section'

import { ProjectSection } from '~/modules/project-section'
import { ProjectFilterType } from '~/modules/project-filter-type'
import { ProjectFilterPurpose } from '~/modules/project-filter-purpose'

const ProjectsPage: Page = () => (
	<>
		<Section className={styles.title()}>
			<Title as="h2">Наши проекты</Title>
		</Section>

		<Suspense>
			<Section className={styles.filters()}>
				<ProjectFilterType />
				<Separator />
				<ProjectFilterPurpose />
			</Section>
		</Suspense>

		<Suspense>
			<ProjectSection />
		</Suspense>
	</>
)

const styles = tv({
	slots: {
		title: 'pb-6 pt-12',
		filters: 'flex flex-col gap-y-5 py-2.5',
		grid: '',
	},
})()

export default ProjectsPage
