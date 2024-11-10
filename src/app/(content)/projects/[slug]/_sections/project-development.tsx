import type { Project } from '~/entities/project'

import { Image } from '~/components/ui/image'
import { Spacer } from '~/components/ui/spacer'
import { Button } from '~/components/ui/button'
import { Text, Title } from '~/components/ui/text'

import { createImageSrc } from './utils'

const ProjectDevelopment = (project: Project) => (
	<div className="flex flex-col py-10">
		<div className="flex flex-col md:flex-row">
			<div className="max-md:mb-10 md:min-w-[430px]">
				<Text
					bold
					as="h6"
					id="development"
					className="font-gilroy md:font-gilroy-bold"
				>
					Этапы проектирования
				</Text>
			</div>
			<div className="flex flex-col gap-y-6 md:flex-1">
				<Title
					as="h2"
					uppercase
				>
					ДИЗАЙН
				</Title>

				<div className="flex flex-col gap-y-4">
					{project.development.blocks.map((text, idx) => (
						<span key={idx}>{text}</span>
					))}
				</div>

				<div className="scrollbar-hide flex max-w-full space-x-4 overflow-x-auto">
					{project.development.files.map((file, idx) => (
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

		<Spacer y="xl" />

		<Image
			alt="design"
			src={createImageSrc(project.slug, 'development.png')}
			width={1116}
			height={650}
			className="h-[343px] md:h-[650px]"
		/>
	</div>
)

export { ProjectDevelopment }
