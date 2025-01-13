import { ReactChildren } from '~/lib/types'

import { Text } from '~/components/ui/text'
import { Title } from '~/components/ui/text'
import { Image } from '~/components/ui/image'
import { Spacer } from '~/components/ui/spacer'

type SectionProps = {
	id: string
	tag: string
	title: string
	image?: string
}

type PromotionSectionProps = {
	section: SectionProps
	blur?: boolean
	children: ReactChildren
}

const PromotionSection = ({ section, children, blur = false }: PromotionSectionProps) => (
	<div className="flex flex-col py-10">
		<div className="relative flex flex-col  md:flex-row">
			{blur && (
				<div className="absolute -left-40 top-32 h-[300px] w-[300px] rounded-full bg-primary opacity-80 blur-3xl max-md:hidden" />
			)}
			<div className="max-md:mb-10 md:min-w-[430px]">
				<Text
					bold
					as="h6"
					id={section.id}
					aria-label={section.tag}
					className="font-gilroy md:font-gilroy-bold"
				>
					{section.tag}
				</Text>
			</div>
			<div className="flex flex-col gap-y-6 md:flex-1">
				<Title
					as="h2"
					uppercase
				>
					{section.title}
				</Title>
				{children}
			</div>
		</div>

		<Spacer y="4xl" />

		{section.image && (
			<Image
				alt="prototype"
				src={section.image}
				width={1116}
				height={550}
				className="h-[343px] md:h-[550px]"
			/>
		)}
	</div>
)

export { PromotionSection }
