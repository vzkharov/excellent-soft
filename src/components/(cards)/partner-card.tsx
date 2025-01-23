import { tv } from 'tailwind-variants'

import Link from 'next/link'
import type { StyleProps } from '~/lib/types'
import { renderSplittedText } from '~/helpers/string'

import { Section } from '~/components/(sections)'
import { Text, Title } from '~/components/ui/text'
import { ArrowRightIcon } from '../ui/icons/arrow-right-icon'

type PartnerCardProps = StyleProps & {
	title: string
	description: string
	href: string
}

const PartnerCard = ({ title, description, href, className, ...props }: PartnerCardProps) => (
	<Section
		{...props}
		color="black"
		bg={styles.bg()}
	>
		<Link
			href={href}
			className="!whitespace-normal"
		>
			<div className={styles.card({ className })}>
				<div className={styles.header()}>
					<Title
						as="h3"
						className={styles.title()}
					>
						{title}
					</Title>
					<Text
						size="md"
						font="gilroy-bold"
						className={styles.description()}
					>
						{renderSplittedText(description)}
					</Text>
				</div>

				<ArrowRightIcon className={styles.arrowIcon()} />
			</div>
		</Link>
	</Section>
)

const styles = tv({
	slots: {
		bg: 'bg-black',
		card: 'group flex md:flex-row items-center justify-between py-16 gap-y-4 gap-x-20 cursor-pointer border-t border-white',
		header: 'flex max-md:w-full md:flex-1 md:items-center md:justify-between max-md:flex-col max-md:gap-5',
		title: 'group-hover:text-primary translate-y-1 flex-1',

		arrow: 'flex-none group-hover:bg-gradient-brand flex h-14 w-14 items-center justify-center rounded-full bg-gray-900/10',
		arrowIcon: 'h-14 w-16 text-white transform duration-300 group-hover:text-primary',

		description: 'flex-1 text-sm md:text-md',
	},
})()

export { PartnerCard }
