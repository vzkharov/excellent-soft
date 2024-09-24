import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'

import type { Project } from '~/entities/project'

import { Text } from '~/components/ui/text'
import { Image } from '~/components/ui/image'
import { Button } from '~/components/ui/button'
import { ArrowDownIcon } from '~/components/ui/icons/arrow-down-icon'

type ProjectCardProps = Project & StyleProps

const ProjectCard = ({ style, className, ...project }: ProjectCardProps) => (
	<article
		style={style}
		className={styles.card({ className })}
	>
		<div className={styles.imgWrapper()}>
			<Image
				alt={[project.id, 'preview'].join(' ')}
				src={project.image}
				width={546}
				height={370}
			/>
			<div className={styles.imgOverlay()}>
				<Image
					alt={[project.id, 'company'].join(' ')}
					src={project.companyLogo}
					className={styles.companyLogo()}
				/>
			</div>
		</div>

		<div className={styles.info()}>
			<Text
				as="h5"
				size="md"
				font="gilroy-bold"
				lineClamp={1}
			>
				{project.title}
			</Text>
			<Text
				size="xs"
				lineClamp={2}
			>
				{project.description}
			</Text>
		</div>

		<Button
			size="sm"
			variant="default"
		>
			Смотреть кейс
			<ArrowDownIcon className="-rotate-90" />
		</Button>
	</article>
)

const styles = tv({
	slots: {
		card: 'flex flex-col gap-y-5',
		imgWrapper: 'relative overflow-hidden cursor-pointer',
		imgOverlay: 'absolute inset-0 flex items-center justify-center select-none bg-black/20 opacity-0 backdrop-blur-lg transition-opacity hover:opacity-100',
		companyLogo: 'h-auto w-auto object-none pointer-events-none',
		info: 'space-y-1',
	},
})()

export { ProjectCard }
