import { tv } from 'tailwind-variants'

import { Text } from '~/components/ui/text'
import { Image } from '~/components/ui/image'

import { ContactButton } from '~/components/(buttons)/contact-button'

type CarouselCardConfig = {
	id: string
	title: string
	cover: string

	actionText?: string
	description?: string
}

type CarouselCardProps = React.HTMLAttributes<HTMLDivElement> & CarouselCardConfig

const CarouselCard = ({ cover, title, actionText, description, className, ...props }: CarouselCardProps) => (
	<article
		{...props}
		title={title}
		className={styles.card({ className })}
	>
		<Image
			alt={title}
			src={cover}
			title={title}
			width={400}
			height={400}
			className={styles.cover()}
		/>
		<Text
			as="h6"
			lineClamp={1}
			font="gilroy-bold"
		>
			{title}
		</Text>
		{description ? (
			<Text
				size="sm"
				lineClamp={4}
			>
				{description}
			</Text>
		) : null}
		{actionText ? (
			<ContactButton
				size="sm"
				variant="outlined"
				className={styles.button()}
			>
				{actionText}
			</ContactButton>
		) : null}
	</article>
)

const styles = tv({
	slots: {
		card: 'h-full w-[400px] flex flex-col gap-y-6',
		cover: 'w-[400px] h-[400px] aspect-square rounded-md cursor-pointer',
		button: 'mt-auto',
	},
})()

export { CarouselCard }
export type { CarouselCardConfig, CarouselCardProps }
