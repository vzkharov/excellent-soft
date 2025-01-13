import { Spacer } from '~/components/ui/spacer'
import { Text, Title } from '~/components/ui/text'

import { Jobs } from '~/modules/jobs-section'
import { FeaturesCarousel } from '~/modules/features-carousel'
import { Image } from '~/components/ui/image'
import { tv } from 'tailwind-variants'
import { Separator } from '~/components/ui/separator'

const DevelopmentSection = () => (
	<>
		<div className={styles.container()}>
			<div>
				<Title
					color="black"
					as="h2"
					className="max-sm:leading-[3rem]"
				>
					Сайты и веб сервисы <br />
					<span className="bg-black text-primary max-sm:leading-[3rem]">
						«под ключ»
					</span>{' '}
					любой сложности
				</Title>

				<Spacer y="lg" />

				<Text
					color="black"
					bold
					size="md"
				>
					От базового предложения до кастомной разработки
				</Text>
			</div>

			<Image
				alt="snowflake"
				src="/snowflake.png"
				width={202}
				height={202}
				className={styles.img()}
			/>
		</div>

		<Spacer y="3xl" />
		<Jobs />
		<Spacer y="3xl" />
		<Separator className="mx-32 h-[2px] w-auto bg-black" />
		{/* <FeaturesCarousel /> */}
	</>
)

const styles = tv({
	slots: {
		container: 'flex justify-between max-md:flex-col max-md:gap-10',
		img: 'aspect-[1/1] w-[200px] max-md:hidden',
	},
})()

export { DevelopmentSection }
