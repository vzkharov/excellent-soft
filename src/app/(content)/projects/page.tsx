import { Suspense } from 'react'

import type { Page } from '~/lib/types'
import { createMetadata } from '~/lib/metadata'

import { navigation } from '~/config/navigation'

import { Title } from '~/components/ui/text'
import { Separator } from '~/components/ui/separator'

import { Footer } from '~/components/footer'
import { Section } from '~/components/(sections)'

import { ProjectSection } from '~/modules/project-section'
import { ProjectFilterType } from '~/modules/project-filter-type'
import { ProjectFilterPurpose } from '~/modules/project-filter-purpose'

import { styles } from './styles'

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

		<Footer />
	</>
)

export const metadata = createMetadata(navigation.projects)

export default ProjectsPage
