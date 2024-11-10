import type { Project } from '~/entities/project'

import { Card } from '~/components/ui/card'
import { Text } from '~/components/ui/text'
import { Title } from '~/components/ui/text'
import { Spacer } from '~/components/ui/spacer'

const ProjectProblems = (project: Project) => (
	<div className="py-16">
		<Text
			bold
			as="h6"
			id="project"
			className="font-gilroy md:font-gilroy-bold"
		>
			Проект
		</Text>

		<Spacer y="md" />

		<Title
			as="h2"
			uppercase
		>
			Проблемы и Решения
		</Title>

		<Spacer y="xl" />

		<div className="mb-5 grid gap-10 md:grid-cols-2 md:gap-5">
			{['Проблема', 'Решение'].map((title, idx) => (
				<Text
					key={idx}
					bold
					as="h6"
				>
					{title}
				</Text>
			))}
		</div>

		{project.problems.map((_item, idx) => (
			<div
				key={idx}
				className="mb-10 grid gap-10 md:mb-6 md:grid-cols-2 md:gap-6"
			>
				<Card
					key={idx}
					idx={idx + 1}
					title=" "
				>
					{_item.problem}
				</Card>
				<Card
					key={idx}
					idx={idx + 1}
					title=" "
				>
					{_item.solution}
				</Card>
			</div>
		))}
	</div>
)

export { ProjectProblems }
