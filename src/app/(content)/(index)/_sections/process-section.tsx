import Link from 'next/link'
import { tv } from 'tailwind-variants'

import { navigation } from '~/config/navigation'

import { Image } from '~/components/ui/image'
import { Title } from '~/components/ui/text'
import { Button } from '~/components/ui/button'
import { Spacer } from '~/components/ui/spacer'

const ProcessSection = () => (
	<>
		<Title
			as="h2"
			className={styles.title()}
		>
			Что входит в разработку <br /> «Под ключ»?
		</Title>

		<Spacer y="xl" />

		<div className={styles.imgWrapper()}>
			<div className={styles.imgContent()}>
				<Image
					alt="process"
					src="/process.png"
					width={2560}
					height={800}
					className={styles.img()}
				/>
			</div>
		</div>

		<Spacer y="xl" />

		<Link
			href={navigation.development.href}
			className={styles.link()}
		>
			<Button
				bold
				size="lg"
				variant="primary"
			>
				Подробнее о разработке
			</Button>
		</Link>
	</>
)

const styles = tv({
	slots: {
		title: 'max-md:text-2xl',
		imgWrapper: 'relative h-80 md:h-96 flex-center w-full select-none',
		imgContent: 'container absolute -ml-0 w-screen overflow-x-auto px-0 pl-4',
		img: 'inline-block h-72 w-auto max-w-none object-cover ',
		link: 'w-full md:w-fit mx-auto flex-center',
	},
})()

export { ProcessSection }
