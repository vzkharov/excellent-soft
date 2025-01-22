import type { Project } from '~/entities/project'

import { Image } from '~/components/ui/image'
import { Spacer } from '~/components/ui/spacer'
import { Button } from '~/components/ui/button'
import { Text, Title } from '~/components/ui/text'

import { createImageSrc } from './utils'

const ProjectResearch = (project: Project) => (
	<div className="flex flex-col py-10">
		<div className="flex flex-col md:flex-row">
			<div className="max-md:mb-10 md:min-w-[430px]">
				<Text
					bold
					as="h6"
					id="research"
					className="font-gilroy md:font-gilroy-bold"
				>
					Исследования
				</Text>
			</div>
			<div className="flex flex-col gap-y-6 md:flex-1">
				<Title
					as="h2"
					uppercase
				>
					ПРОЦЕСС ИСCЛЕДОВАНИЯ
				</Title>

				<div className="flex flex-col gap-y-4">
					{project.research.blocks.map((text, idx) => (
						<span key={idx}>{text}</span>
					))}
				</div>

				<div className="scrollbar-hide flex max-w-full space-x-4 overflow-x-auto">
					{project.research.files.map((file, idx) => (
						<Button
							key={idx}
							size="sm"
							variant="shadow"
						>
							{file.label}
						</Button>
					))}
				</div>
			</div>
		</div>

		<Spacer y="xl" />

		<Image
			alt="research"
			src={createImageSrc(project.slug, 'research.png')}
			width={1116}
			height={550}
			className="h-[343px] md:h-[550px]"
		/>
	</div>
)

export { ProjectResearch }
