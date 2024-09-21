import Link from 'next/link'
import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'

import { Step } from '~/components/step'
import { Text } from '~/components/ui/text'
import { Image } from '~/components/ui/image'
import { Spacer } from '~/components/ui/spacer'
import { Separator } from '~/components/ui/separator'

type ServiceCardProps = StyleProps & {
	href: string
	step: number

	icon: string
	title: string
	description: string
}

const ServiceCard = ({ step, icon, href, title, description, className }: ServiceCardProps) => (
	<Link
		href={href}
		className={styles.card({ className })}
	>
		<Image
			alt="icon"
			src={icon}
			width={32}
			height={32}
			className={styles.icon()}
		/>
		<Spacer y="1.5rem" />

		<Text
			bold
			as="h6"
		>
			{title}
		</Text>

		<Spacer y="0.75rem" />

		<Text color="foreground">{description}</Text>

		<Spacer y="auto" />
		<Spacer y="2rem" />

		<Separator className={styles.divider()} />

		<Spacer y="1.5rem" />

		<Step count={step} />
	</Link>
)

const styles = tv({
	slots: {
		card: 'group block h-full rounded-md bg-gray-200/60 py-10 backdrop-blur-lg [&>*]:ml-5',
		icon: 'h-8 w-auto',
		divider: "relative opacity-50 !mx-0 before:absolute before:bottom-0 before:ml-5 before:h-[3px] before:w-5 before:bg-white before:content-['']",
		step: 'w-fit px-px group-hover:bg-primary group-hover:text-dark',
	},
})()

export { ServiceCard }
