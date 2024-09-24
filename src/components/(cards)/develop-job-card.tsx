import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'
import { renderSplittedText } from '~/helpers/string'

import { Text, Title } from '~/components/ui/text'

type DevelopJobCardProps = StyleProps & {
	title: string
	description: string

	minDate: string
}

const DevelopJobCard = ({ title, minDate, description, className }: DevelopJobCardProps) => (
	<article className={styles.border()}>
		<div className={styles.card({ className })}>
			<Title as="h4">{renderSplittedText(title)}</Title>

			<Text
				bold
				size="md"
			>
				{minDate}
			</Text>

			<Text>{description}</Text>
		</div>
	</article>
)

const styles = tv({
	slots: {
		border: 'group/job rounded-md bg-gradient-to-b from-gray-300 via-gray-300 to-primary p-px hover:from-primary hover:via-primary hover:text-dark',
		card: [
			'relative text-center px-8 gap-y-5 pt-16 h-96 flex flex-col items-center rounded-md bg-gradient-to-b from-gray-300 to-gray-200',
			'group-hover/job:from-primary group-hover/job:to-primary',
			"after:content-[''] after:absolute after:inset-x-auto after:bottom-14 after:h-[2px] after:w-8 after:bg-primary",
			'group-hover/job:after:bg-dark',
		],
	},
})()

export { DevelopJobCard }
export type { DevelopJobCardProps }
