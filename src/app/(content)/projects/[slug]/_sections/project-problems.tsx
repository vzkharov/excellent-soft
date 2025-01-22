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
			className="font-gilroy-bold"
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

		<div className="grid gap-10 md:grid-cols-2 md:gap-5 ">
			<div className="grid grid-rows-[30px] gap-5 md:auto-rows-[1fr]">
				<Text
					bold
					as="h6"
				>
					Проблема
				</Text>

				{project.problems.map((item, idx) => (
					<Card
						key={idx}
						idx={idx + 1}
						title=" "
						className=" max-md:h-fit"
					>
						{item.problem}
					</Card>
				))}
			</div>

			<div className="grid grid-rows-[30px] gap-5 md:auto-rows-[1fr]">
				<Text
					bold
					as="h6"
				>
					Решение
				</Text>
				{project.problems.map((item, idx) => (
					<Card
						key={idx}
						idx={idx + 1}
						title=" "
						className="max-md:h-fit"
					>
						{item.solution}
					</Card>
				))}
			</div>
		</div>
		<Spacer y="xl" />
	</div>
)

export { ProjectProblems }
