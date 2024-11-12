import Link from 'next/link'

import type { Project } from '~/entities/project'

import { Text } from '~/components/ui/text'
import { Title } from '~/components/ui/text'
import { Image } from '~/components/ui/image'
import { Button } from '~/components/ui/button'
import { Spacer } from '~/components/ui/spacer'

import { createImageSrc } from './utils'

const ProjectOverview = (project: Project) => (
	<div className="flex flex-col py-10">
		<div className="flex flex-col md:flex-row">
			<div className="max-md:mb-10 md:min-w-[430px]">
				<Text
					as="h6"
					id="overview"
					className="font-gilroy md:font-gilroy-bold"
				>
					Обзор проекта
				</Text>
			</div>
			<div className="flex flex-col md:flex-1">
				<Title
					as="h3"
					uppercase
				>
					{project.overview.title}
				</Title>

				<Spacer y="xl" />

				<Link href={project.previewUrl || '#'}>
					<Button
						size="sm"
						variant="default"
					>
						Смотреть сайт
					</Button>
				</Link>

				<Spacer y="xl" />

				<div className="flex flex-col gap-y-4">
					{project.overview.blocks.map((text, idx) => (
						<span key={idx}>{text}</span>
					))}
				</div>

				<Spacer y="xl" />

				<div className="grid grid-cols-2 grid-rows-[auto_1fr] gap-y-3">
					<Text
						bold
						as="h6"
					>
						Клиент:
					</Text>

					<Text
						bold
						as="h6"
					>
						Услуги:
					</Text>

					<ul className="list-none space-y-2">
						<li>{project.company.name}</li>
					</ul>

					<ul className="list-none space-y-1.5">
						{project.services.map((service, idx) => (
							<li key={idx}>{service}</li>
						))}
					</ul>
				</div>
			</div>
		</div>

		<Spacer y="2xl" />

		<div className="grid gap-5 md:grid-cols-2">
			<Image
				alt="cover-1"
				src={createImageSrc(project.slug, 'image-1.png')}
				width={546}
				height={546}
				className="h-[343px] md:h-[550px]"
			/>
			<Image
				alt="cover-2"
				src={createImageSrc(project.slug, 'image-2.png')}
				width={546}
				height={546}
				className="h-[343px] md:h-[550px]"
			/>
		</div>
	</div>
)

export { ProjectOverview }
