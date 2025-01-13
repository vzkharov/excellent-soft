import Image from 'next/image'

import { Spacer } from '~/components/ui/spacer'
import { Section } from '~/components/(sections)'
import { Title, Text } from '~/components/ui/text'
import { Separator } from '~/components/ui/separator'

const HeroSection = () => (
	<>
		<Section>
			<Title
				as="h1"
				className="font-mulish flex w-fit text-[150px] font-[900] text-black max-lg:flex-col max-md:text-[86px]"
			>
				<span className="bg-primary">crypto</span> stack
			</Title>
		</Section>

		<Spacer y="4xl" />

		<Section>
			<Text className="font-gilroy-bold text-[36px] uppercase max-md:text-lg">
				дизайн и развитие криптопродуктов
			</Text>
			<Separator className="mt-5 bg-black" />
			<div className="flex w-full gap-7">
				<div className="min-w-[230px] max-md:hidden" />
				<Separator
					orientation="vertical"
					className="h-auto bg-black max-md:hidden"
				/>
				<div className="flex-1">
					<Text className="mt-5 max-w-[400px] font-gilroy-bold text-base uppercase max-md:text-[12px]">
						web / android / Ios / mobile / full-screen / дизайн-система / личный
						кабинет / NFT/ Blockchain
					</Text>
				</div>
			</div>
		</Section>

		<Spacer y="xl" />

		<Section>
			<div className="relative flex w-full overflow-hidden">
				<Image
					src="/web_3/image-0.png"
					alt="web 3.0"
					width={826}
					height={645}
					className=" aspect-auto max-lg:w-full"
				/>
				<p className="absolute right-0 top-28 z-10 max-w-xl font-gilroy text-md uppercase text-black max-lg:hidden">
					Разработаем эффективный Web 3 дизайн, опираясь на практический опыт. Мы
					обеспечим, чтобы ваш блокчейн-проект соответствовал бизнес-целям и ожиданиям
					пользователей и выгодно отличался от других.
				</p>
				<div className="absolute bottom-0 right-20 z-0 h-[300px] w-[380px] rotate-[-30deg] rounded-full bg-primary opacity-70 blur-3xl max-lg:hidden" />
			</div>
			<div className="relative overflow-hidden  py-10 pb-24 lg:hidden">
				<p className=" relative z-10 w-full font-gilroy text-md uppercase text-black">
					Разработаем эффективный Web 3 дизайн, опираясь на практический опыт. Мы
					обеспечим, чтобы ваш блокчейн-проект соответствовал бизнес-целям и ожиданиям
					пользователей и выгодно отличался от других.
				</p>
				<div className="absolute -right-10 -top-10 z-0 h-[250px] w-[350px] rotate-[-30deg] rounded-full bg-primary opacity-70 blur-3xl" />
			</div>
		</Section>
	</>
)

export { HeroSection }
