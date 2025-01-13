import { cards } from '../_data'

import { Card } from '~/components/ui/card'
import { Text } from '~/components/ui/text'
import { Title } from '~/components/ui/text'
import { Spacer } from '~/components/ui/spacer'

const AdditionalSection = () => (
	<div className="py-16">
		<Text
			bold
			as="h6"
			id="project"
			className="font-gilroy-bold"
		>
			Дополнительно
		</Text>

		<Spacer y="md" />

		<Title
			as="h3"
			uppercase
		>
			услуги по блокчейн и Web3 UX дизайну
		</Title>

		<Spacer y="md" />

		<Title
			as="h5"
			bold
			className="w-full font-gilroy-bold normal-case md:w-[560px]"
		>
			Мы разрабатываем стильные, интуитивно понятные и эстетически приятные интерфейсы, согласно Вашим
			бизнес-целям и потребностями вашей аудитории.
		</Title>

		<Spacer y="xl" />

		<div className="grid grid-rows-[auto_1fr] gap-10 md:grid-cols-2 md:gap-5">
			{cards.map((item, idx) => (
				<Card
					key={idx}
					variant="lightgray"
					title={item.title}
					className="h-full"
				>
					{item.content}
				</Card>
			))}
		</div>
	</div>
)

export { AdditionalSection }
