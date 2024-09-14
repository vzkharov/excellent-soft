'use client'

import { projectPurposeConfig } from '~/config/projects'

import { useProjectFilterState } from '~/features/(project)/use-project-filter-state'

import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'

const noFilter = {
	name: 'Все отрасли',
	value: '',
}

const ProjectFilterPurpose = () => {
	const [state, setState] = useProjectFilterState(0)

	return (
		<Tabs
			defaultValue={state.purpose}
			onValueChange={(value) => setState({ purpose: value })}
		>
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
