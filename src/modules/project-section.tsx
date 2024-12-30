import { tv } from 'tailwind-variants'

import { projectsConfig } from '~/config/projects'

import { ProjectCard } from '~/components/(cards)/project-card'
import { Section, type SectionProps } from '~/components/(sections)'
import Link from 'next/link'
import { navigation } from '~/config/navigation'
import { Title } from '~/components/ui/text'

type ProjectSectionProps = Omit<SectionProps, 'title'> & {
	withTitle?: boolean
}

const ProjectSection = ({ className, withTitle = false, ...props }: ProjectSectionProps) => (
	<Section
		{...props}
		className={styles.section({ className })}
	>
		<Title
			as="h2"
			className=""
		>
			Примеры наших <br /> работ
		</Title>
		<div className={styles.grid()}>
			{projectsConfig.map((project) => (
				<ProjectCard
					key={project.id}
					{...project}
					className={styles.card()}
				/>
			))}
		</div>

		{/* <Link
			href={navigation.projects.href}
			className={styles.button()}
		>
			Больше проектов
		</Link> */}
	</Section>
)

const styles = tv({
	slots: {
		title: 'max-md:text-2xl ',
		section: 'py-16 space-y-16 md:py-24 md:space-y-24',
		grid: 'grid grid-cols-1 md:grid-cols-2 gap-x-9 gap-y-12',
		card: 'md:odd:mt-16',
		button: 'mx-auto cursor-pointer flex items-center justify-center aspect-square h-64 w-64 rounded-full bg-primary font-gilroy-bold text-md !text-dark hover:bg-dark hover:!text-primary  focus:bg-primary',
	},
})()

export { ProjectSection }
