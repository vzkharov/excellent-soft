import { Spacer } from '~/components/ui/spacer'
import { Title, Text } from '~/components/ui/text'

type Technology = {
	name: string
	logo: string
}

type TechnologyGroupProps = {
	title: string
	items: Technology[]
}

type ServiceTechnologyProps = {
	techStack: TechnologyGroupProps[]
}

const ServiceTechnology = ({ techStack }: ServiceTechnologyProps) => (
	<section>
		<Spacer y="3xl" />
		<Title as="h3">Технологии, которые мы используем</Title>
		<Spacer y="xl" />

		{techStack.map((item, idx) => (
			<TechnologyGroup
				key={`tech-${idx}`}
				title={item.title}
				items={item.items}
			/>
		))}
	</section>
)

const TechnologyGroup = ({ title, items }: TechnologyGroupProps) => (
	<div className="py-5 pl-2">
		<Text
			bold
			as="h5"
		>
			{title}
		</Text>
		<Spacer y="xl" />
		<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
			{items.map((item, idx) => (
				<div
					key={`technology-${idx}`}
					className="flex flex-col items-start"
				>
					<div className="flex flex-row items-center justify-center space-x-5">
						<img
							src={item.logo}
							alt={item.name}
							className="h-12 w-12"
						/>
						<Text bold>{item.name}</Text>
					</div>
					<div className="mt-3 w-9/12 border-t border-[#DADADA]"></div>
				</div>
			))}
		</div>
		<Spacer y="3xl" />
	</div>
)

export { ServiceTechnology }
