import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'
import { projectsConfig } from '~/config/projects'

import { Section } from '~/components/section'
import { ProjectCard } from '~/components/project-card'

const ProjectSection = ({ className, ...props }: StyleProps) => (
	<Section
		{...props}
		className={styles.section({ className })}
	>
		{projectsConfig.map((project) => (
			<ProjectCard
				key={project.id}
				{...project}
				className={styles.card()}
			/>
		))}
	</Section>
)

const styles = tv({
	slots: {
		section: 'grid grid-cols-2 gap-x-9 gap-y-12',
		card: 'odd:mt-16',
	},
})()

export { ProjectSection }
