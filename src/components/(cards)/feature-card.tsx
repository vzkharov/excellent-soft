import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'

import { Step } from '~/components/step'
import { Text } from '~/components/ui/text'
import { Image } from '~/components/ui/image'

type FeatureCardProps = StyleProps & {
	title: string
	step: number
	icon: string
}

const FeatureCard = ({ title, step, icon, className, ...props }: FeatureCardProps) => (
	<article
		{...props}
		className={styles.card({ className })}
	>
		<Image
			alt=""
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
		card: 'flex h-full flex-col items-center gap-y-7 rounded-md bg-dark px-7 py-10 text-center font-gilroy-bold',
		icon: 'h-10 w-auto',
	},
})()

export { FeatureCard }
