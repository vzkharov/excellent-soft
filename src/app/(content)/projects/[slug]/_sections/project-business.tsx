import type { Project } from '~/entities/project'

import { Text } from '~/components/ui/text'
import { Title } from '~/components/ui/text'
import { Image } from '~/components/ui/image'
import { Spacer } from '~/components/ui/spacer'

import { createImageSrc } from './utils'

const ProjectBusiness = (project: Project) => (
	<div className="flex flex-col py-10">
		<div className="flex flex-col md:flex-row">
			<div className="max-md:mb-10 md:min-w-[430px]">
				<Text
					bold
					as="h6"
					id="business"
					aria-label="Запрос бизнеса"
					className="font-gilroy md:font-gilroy-bold"
				>
					Запрос бизнеса
				</Text>
			</div>
			<div className="flex flex-col gap-y-6 md:flex-1">
				<Title
					as="h2"
					uppercase
				>
					БИЗНЕС-ПОТРЕБНОСТИ
				</Title>

				<div className="flex flex-col gap-y-4">
					{project.business.blocks.map((text, idx) => (
						<span key={idx}>{text}</span>
					))}
				</div>

				<Text
					bold
					as="h5"
				>
					Наша роль
				</Text>

				<div className="flex flex-col gap-y-4">
					{project.business.role.map((text, idx) => (
						<span key={idx}>{text}</span>
					))}
				</div>
			</div>
		</div>

		<Spacer y="4xl" />

		<Image
			alt="prototype"
			src={createImageSrc(project.slug, 'prototype.png')}
			width={1116}
			height={550}
			className="h-[343px] md:h-[550px]"
		/>
	</div>
)

export { ProjectBusiness }
