import { tv } from 'tailwind-variants'

import { Image } from '~/components/ui/image'
import { Title } from '~/components/ui/text'
import { Button } from '~/components/ui/button'
import { Spacer } from '~/components/ui/spacer'

const ProcessSection = () => (
	<>
		<Title as="h2">
			Что входит в разработку <br /> «Под ключ»?
		</Title>

		<Spacer y="lg" />

		<div className={styles.imgWrapper()}>
			<Image
				alt="process"
				src="/process.png"
				width={2560}
				height={800}
				className={styles.img()}
			/>
		</div>

		<Spacer y="xl" />

		<Button
			bold
			size="lg"
			variant="primary"
			className={styles.button()}
		>
			Подробнее о разработке
		</Button>
	</>
)

const styles = tv({
	slots: {
		imgWrapper: 'relative h-96 overflow-x-visible',
		img: 'absolute top-0 h-96 w-auto object-cover',
		button: 'block mx-auto',
	},
})()

export { ProcessSection }
