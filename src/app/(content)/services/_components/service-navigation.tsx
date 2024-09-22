import Link from 'next/link'

import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'

type ServiceTab = {
	id: string
	href: string
	title: string
}

type ServiceNavigationProps = {
	items: ServiceTab[]
}

const ServiceNavigation = ({ items }: ServiceNavigationProps) => (
	<Tabs defaultValue={items.at(0)?.id}>
		<TabsList>
			{items.map((tab) => (
				<Link
					key={tab.id}
					href={tab.href}
					className="font-gilroy"
				>
					<TabsTrigger value={tab.id}>{tab.title}</TabsTrigger>
				</Link>
			))}
		</TabsList>
	</Tabs>
)

export { ServiceNavigation }
export type { ServiceTab }
