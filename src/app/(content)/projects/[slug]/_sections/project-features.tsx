import type { Project } from '~/entities/project'

import { Button } from '~/components/ui/button'
import { Text, Title } from '~/components/ui/text'

const ProjectFeatures = (project: Project) => (
	<div className="flex flex-col py-10">
		<div className="flex flex-col md:flex-row">
			<div className="max-md:mb-10 md:min-w-[430px]">
				<Text
					bold
					as="h6"
					id="features"
					className="font-gilroy md:font-gilroy-bold"
				>
					Функционал
				</Text>
			</div>
			<div className="flex flex-col gap-y-6 md:flex-1">
				<Title
					as="h2"
					uppercase
				>
					КАКИЕ ФИЧИ ВНЕДРИЛИ
				</Title>

				<div className="flex flex-col gap-y-4">
					{project.features.blocks.map((text, idx) => (
						<span key={idx}>{text}</span>
					))}
				</div>

				<div className="scrollbar-hide flex max-w-full space-x-4 overflow-x-auto">
					{project.features.files.map((file, idx) => (
						<Button
							key={idx}
							size="sm"
							variant="outlined"
						>
							{file.label}
						</Button>
					))}
				</div>
			</div>
		</div>
	</div>
)

export { ProjectFeatures }
