import Link from 'next/link'

import type { Project } from '~/entities/project'

import { Image } from '~/components/ui/image'
import { Spacer } from '~/components/ui/spacer'
import { Button } from '~/components/ui/button'

import { Text, Title } from '~/components/ui/text'

import { createImageSrc } from './utils'

const ProjectResults = (project: Project) => (
	<div className="flex flex-col pt-10">
		<div className="flex flex-col md:flex-row">
			<div className="max-md:mb-10 md:min-w-[430px]">
				<Text
					bold
					as="h6"
					id="finish"
					className="font-gilroy md:font-gilroy-bold"
				>
					Результат
				</Text>
			</div>
			<div className="flex flex-col gap-y-6 md:flex-1">
				<Title
					as="h2"
					uppercase
				>
					{project.result.title}
				</Title>

				<div className="flex flex-col gap-y-4">
					{project.result.blocks.map((text, idx) => (
						<span key={idx}>{text}</span>
					))}
				</div>

				<Link href={project.previewUrl || '#'}>
					<Button
						bold
						size="lg"
						variant="gradient"
					>
						Смотреть сайт
					</Button>
				</Link>
			</div>
		</div>

		<Spacer y="3xl" />

		<Image
			alt="result"
			src={createImageSrc(project.slug, 'result.png')}
			width={1116}
			height={600}
			className="h-[343px] md:h-[600px]"
		/>
	</div>
)

export { ProjectResults }
