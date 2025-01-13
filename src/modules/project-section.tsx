import { tv } from 'tailwind-variants'

import { projectsConfig } from '~/config/projects'

import { ProjectCard } from '~/components/(cards)/project-card'
import { Section, type SectionProps } from '~/components/(sections)'

type ProjectSectionProps = Omit<SectionProps, 'title'> & {
	withTitle?: boolean
}

const ProjectSection = ({ className, withTitle = false, ...props }: ProjectSectionProps) => (
	<Section
		{...props}
		className={styles.section({ className })}
	>
		<div className={styles.grid()}>
			{projectsConfig.map((project) => (
				<ProjectCard
					key={project.id}
					{...project}
					className={styles.card()}
				/>
			))}
		</div>
	</Section>
)

const styles = tv({
	slots: {
		title: 'max-md:text-2xl ',
		section: 'py-16 space-y-16 md:py-24 md:space-y-24',
		grid: 'grid grid-cols-1 md:grid-cols-2 gap-x-9 gap-y-12',
		card: 'md:odd:mt-16',
	},
})()

export { ProjectSection }
