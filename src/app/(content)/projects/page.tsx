import { Suspense } from 'react'
import { tv } from 'tailwind-variants'

import type { Page } from '~/lib/types'

import { Title } from '~/components/ui/text'
import { Separator } from '~/components/ui/separator'
import { Section } from '~/components/(sections)'

import { ProjectSection } from '~/modules/project-section'
import { ProjectFilterType } from '~/modules/project-filter-type'
import { ProjectFilterPurpose } from '~/modules/project-filter-purpose'

const ProjectsPage: Page = async () => (
	<>
		<Section className={styles.title()}>
			<Title as="h2">Наши проекты</Title>
		</Section>

		<Section className={styles.filters()}>
			<Suspense fallback={<div className={styles.filterFallback()} />}>
				<ProjectFilterType />
			</Suspense>
			<Separator />
			<Suspense fallback={<div className={styles.filterFallback()} />}>
				<ProjectFilterPurpose />
			</Suspense>
		</Section>

		<ProjectSection />
	</>
)

const styles = tv({
	slots: {
		title: 'pb-6 pt-12',
		filters: 'flex flex-col gap-y-5 py-2.5',
		filterFallback: 'h-11',
	},
})()

export default ProjectsPage
