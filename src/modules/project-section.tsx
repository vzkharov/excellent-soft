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
		title={withTitle ? 'Примеры работ' : undefined}
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

		<div className={styles.button()}>Больше проектов</div>
	</Section>
)

const styles = tv({
	slots: {
		section: 'py-24 space-y-24',
		grid: 'grid grid-cols-2 gap-x-9 gap-y-12',
		card: 'odd:mt-16',
		button: 'mx-auto cursor-pointer flex items-center justify-center aspect-square h-1/4 w-1/4 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end font-gilroy-bold text-md text-dark hover:from-primary hover:to-primary focus:from-primary focus:to-primary',
	},
})()

export { ProjectSection }
