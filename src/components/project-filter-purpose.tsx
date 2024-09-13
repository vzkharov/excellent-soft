import { projectPurposeConfig } from '~/config/projects'

import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'

const noFilter = {
	name: 'Все отрасли',
	value: '',
}

const ProjectFilterPurpose = () => {
	/**
	 * @todo useQueryState
	 */
	return (
		<Tabs defaultValue={noFilter.value}>
			<TabsList>
				<TabsTrigger value={noFilter.value}>{noFilter.name}</TabsTrigger>
				{[
					projectPurposeConfig.Health,
					projectPurposeConfig.Education,
					projectPurposeConfig.Building,
					projectPurposeConfig.Industrial,
					projectPurposeConfig.eCommerce,
					projectPurposeConfig.Tourism,
					projectPurposeConfig.B2B,
				].map((type) => (
					<TabsTrigger
						key={type.value}
						value={type.value}
					>
						{type.name}
					</TabsTrigger>
				))}
			</TabsList>
		</Tabs>
	)
}

export { ProjectFilterPurpose }
