import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'
import { projectsConfig } from '~/config/projects'

import { Section } from '~/components/section'
import { ProjectCard } from '~/components/project-card'

const ProjectSection = ({ className, ...props }: StyleProps) => (
	<Section
		{...props}
		className={className}
	>
		<div className={styles.section()}>
			{projectsConfig.map((project) => (
				<ProjectCard
					key={project.id}
					{...project}
					className={styles.card()}
				/>
			))}
		</div>

		<div className={styles.button()}>Больше проектов</div>
	</Section>
)

const styles = tv({
	slots: {
		section: 'grid grid-cols-2 gap-x-9 gap-y-12',
		card: 'odd:mt-16',
		button: 'mt-24 mx-auto cursor-pointer flex items-center justify-center aspect-square h-1/4 w-1/4 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end font-gilroy-bold text-md text-dark hover:from-primary hover:to-primary focus:from-primary focus:to-primary',
	},
})()

export { ProjectSection }
