import { tv } from 'tailwind-variants'

import Link from 'next/link'

import { Button } from '../ui/button'
import { Section } from '~/components/(sections)'

type LinkSectionProps = {
	title: string
	href: string
}

const LinkSection = ({ title, href }: LinkSectionProps) => (
	<Section
		color="primary"
		className={styles.container()}
	>
		<Link href={href}>
			<Button
				bold
				size="lg"
				variant="primary"
				className={styles.button()}
			>
				{title}
			</Button>
		</Link>
	</Section>
)

const styles = tv({
	slots: {
		container: 'flex flex-col gap-5 items-center justify-center py-9',
		button: 'max-md:w-fit max-md:px-10',
	},
})()

export { LinkSection }
