import type { ReactChildren } from '~/lib/types'

import { Title } from '~/components/ui/text'
import { Spacer } from '~/components/ui/spacer'

import { ServiceNavigation, type ServiceTab } from './service-navigation'
import { ServiceFeatures, type ServiceFeature } from './service-features'

type ServiceMainProps = {
	title: string

	tabs: ServiceTab[]
	features: ServiceFeature[]
}

const ServiceMain = ({ tabs, title, features }: ServiceMainProps) => (
	<>
		<ServiceNavigation items={tabs} />
		<Spacer y="4rem" />
		<Title as="h2">{title}</Title>
		<Spacer y="2rem" />
		<ServiceFeatures items={features} />
	</>
)

export { ServiceMain }
