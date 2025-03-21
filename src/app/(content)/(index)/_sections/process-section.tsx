import Link from 'next/link'
import { tv } from 'tailwind-variants'

import { navigation } from '~/config/navigation'

import { Image } from '~/components/ui/image'
import { Button } from '~/components/ui/button'
import { Spacer } from '~/components/ui/spacer'

const ProcessSection = () => (
	<>
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

		<Spacer y="4xl" />

		<Link
			href={navigation.development.href}
			className={styles.link()}
		>
			<Button
				bold
				size="lg"
				variant="outlined"
			>
				Подробнее о разработке
			</Button>
		</Link>
	</>
)

const styles = tv({
	slots: {
		title: 'max-md:text-2xl ',
		imgWrapper: 'relative h-80 md:h-96 flex-center w-full select-none pt-24',
		imgContent: 'container absolute -ml-0 w-screen overflow-x-auto px-0 pl-4 scrollbar-hidden',
		img: 'inline-block h-72 w-auto max-w-none object-cover ',
		link: 'w-full md:w-fit mx-auto flex-center pb-24',
	},
})()

export { ProcessSection }
