import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'

import { Text } from '~/components/ui/text'
import { Step } from '~/components/ui/step'
import { Image } from '~/components/ui/image'

type FeatureCardProps = StyleProps & {
	title: string
	step: number
	icon: string
}

const FeatureCard = ({ title, step, icon, className, ...props }: FeatureCardProps) => (
	<article
		{...props}
		title={title}
		aria-label={title}
		className={styles.card({ className })}
	>
		<Image
			alt={title}
			src={icon}
			width={40}
			height={40}
			className={styles.icon()}
		/>

		<Step
			count={step}
			variant="primary"
		/>

		<Text bold>{title}</Text>
	</article>
)

const styles = tv({
	slots: {
		card: 'flex h-full flex-col items-center gap-y-4 md:gap-y-7 rounded-md bg-dark px-4 py-10 text-center font-gilroy-bold',
		icon: 'h-10 w-auto',
	},
})()

export { FeatureCard }
