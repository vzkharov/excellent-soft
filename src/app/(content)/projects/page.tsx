import { tv } from 'tailwind-variants'

import type { Page } from '~/lib/types'

import { Title } from '~/components/ui/text'
import { Separator } from '~/components/ui/separator'

import { Section } from '~/components/section'
import { ProjectSection } from '~/components/(sections)/project-section'
import { ProjectFilterType } from '~/components/project-filter-type'
import { ProjectFilterPurpose } from '~/components/project-filter-purpose'

const ProjectsPage: Page = () => (
	<>
		<Section className={styles.title()}>
			<Title as="h2">Наши проекты</Title>
		</Section>

		<Section className={styles.filters()}>
			<ProjectFilterType />
			<Separator />
			<ProjectFilterPurpose />
		</Section>

		<ProjectSection className={styles.grid()} />
	</>
)

const styles = tv({
	slots: {
		title: 'pb-6 pt-12',
		filters: 'flex flex-col gap-y-5',
		grid: 'py-24',
	},
})()

export default ProjectsPage
