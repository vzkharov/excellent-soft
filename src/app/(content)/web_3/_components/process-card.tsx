import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'
import { renderSplittedText } from '~/helpers/string'

import { Section } from '~/components/(sections)'
import { Text, Title } from '~/components/ui/text'

type ProcessCardProps = StyleProps & {
	step: string
	description: string
}

const ProcessCard = ({ step, description, className, ...props }: ProcessCardProps) => (
	<Section
		{...props}
		color="black"
		bg={styles.bg()}
		className={styles.card({ className })}
	>
		<div className={styles.header()}>
			<Title
				as="h3"
				className={styles.title()}
			>
				{step}
			</Title>
			<Text
				size="md"
				font="gilroy-bold"
				className={styles.description()}
			>
				{renderSplittedText(description)}
			</Text>
		</div>
	</Section>
)

const styles = tv({
	slots: {
		bg: 'bg-black',
		card: 'group flex md:flex-row items-center  py-16 gap-y-4 gap-x-16 cursor-pointer border-t border-white',
		header: 'flex w-full md:items-center md:justify-between max-md:flex-col max-md:gap-5',
		title: 'group-hover:text-primary translate-y-1 min-w-[380px]',
		description: 'flex-1 text-sm md:text-md line-clamp-2 group-hover:text-primary',
	},
})()

export { ProcessCard }
