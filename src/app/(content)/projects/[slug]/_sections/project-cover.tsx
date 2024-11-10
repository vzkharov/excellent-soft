import type { Project } from '~/entities/project'

import { Image } from '~/components/ui/image'

import { createImageSrc } from './utils'

const ProjectCover = (project: Project) => (
	<Image
		height={550}
		width={1128}
		alt={project.company.name}
		className="h-[343px] md:h-[550px]"
		src={createImageSrc(project.slug, 'image-0.png')}
	/>
)

export { ProjectCover }
