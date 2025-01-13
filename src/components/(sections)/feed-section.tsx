import { tv } from 'tailwind-variants'

import { Image } from '../ui/image'
import { Section } from '~/components/(sections)'
import { ContactButton } from '~/components/(buttons)/contact-button'

type FeedSectionProps = {
	christmas?: boolean
	title?: string
}

const FeedSection = ({ christmas = false, title = 'Давайте обсудим ваш проект' }: FeedSectionProps) => (
	<Section
		color="primary"
		className={`${styles.container()} ${christmas && 'relative h-96 max-md:h-[500px]'}`}
	>
		{christmas && (
			<>
				<h3 className="text-center font-inter font-extrabold text-black">
					Хочу получить подарок <br /> к Рождеству!
				</h3>

				<p className="max-w-[520px] text-center font-inter text-base font-bold text-black">
					Разработаем подробный план внедрения эффективных цифровых инструментов под ваш
					бизнес со сроками, цифрами и ожидаемым результатом
				</p>
			</>
		)}

		<ContactButton
			bold
			size="lg"
			variant="primary"
			className={styles.button()}
		>
			{title}
		</ContactButton>

		{christmas && (
			<Image
				src="/new-year/santa.png"
				alt="santa"
				width={160}
				height={260}
				className="absolute bottom-0 right-20 aspect-[1/2] w-[160px] max-md:hidden "
			/>
		)}

		{christmas && (
			<Image
				src="/new-year/gift.png"
				alt="gift"
				width={160}
				height={260}
				className="absolute bottom-14 left-20 aspect-[1/1] w-[195px] max-md:static max-md:w-[140px]"
			/>
		)}
	</Section>
)

const styles = tv({
	slots: {
		container: 'flex flex-col gap-5 items-center justify-center py-9',
		button: 'max-md:w-fit max-md:px-10',
	},
})()

export { FeedSection }
