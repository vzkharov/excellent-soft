import { renderSplittedText } from '~/helpers/string'

import { Section } from '~/components/(sections)'
import { Text, Title } from '../ui/text'
import { Button } from '../ui/button'
import { ArrowDownIcon } from '../ui/icons/arrow-down-icon'
import { StyleProps } from '~/lib/types'
import { tv } from 'tailwind-variants'

type PartnerCardProps = StyleProps & {
	title: string
	description: string
}

const PartnerCard = ({ title, description, className, ...props }: PartnerCardProps) => (
	<Section
		{...props}
		color="metal"
		bg={styles.bg()}
		className={styles.card({ className })}
	>
		<div className={styles.header()}>
			<Title
				as="h3"
				className={styles.title()}
			>
				{title}
			</Title>
			<div className={styles.arrow()}>
				<ArrowDownIcon className={styles.arrowIcon()} />
			</div>
		</div>

		<Text
			size="md"
			font="gilroy-bold"
			className={styles.description()}
		>
			{renderSplittedText(description)}
		</Text>
	</Section>
)

const styles = tv({
	slots: {
		bg: 'bg-gradient-to-tr',
		card: 'group flex items-center justify-between py-16 gap-x-16 cursor-pointer',
		header: 'flex flex-1 items-center justify-between',
		title: 'group-hover:text-gradient translate-y-1 group-hover:underline',

		arrow: 'group-hover:bg-gradient-brand flex h-14 w-14 items-center justify-center rounded-full bg-gray-900/10',
		arrowIcon: 'h-7 w-7 -rotate-90 text-gradient-end group-hover:text-dark',

		description: 'flex-1 text-left max-md:hidden',
	},
})()

export { PartnerCard }
