'use client'

import { projectTypeConfig } from '~/config/projects'

import { useProjectFilterState } from '~/features/(project)/use-project-filter-state'

import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'

const noFilter = {
	name: 'Все проекты',
	value: '',
}

const WebFilterType = () => {
	const [state, setState] = useProjectFilterState(0)

	return (
		<Tabs
			defaultValue={state.type}
			onValueChange={(value) => setState({ type: value })}
		>
			<TabsList>
				<TabsTrigger value={noFilter.value}>{noFilter.name}</TabsTrigger>
				{[
					projectTypeConfig.Landing,
					projectTypeConfig.Commercial,
					projectTypeConfig.eShop,
					projectTypeConfig.Portal,
					projectTypeConfig.Design,
					projectTypeConfig.Identic,
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

export { WebFilterType }
