import { projectTypeConfig } from '~/config/projects'

import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'

const noFilter = {
	name: 'Все проекты',
	value: '',
}

const ProjectFilterType = () => {
	/**
	 * @todo useQueryState
	 */
	return (
		<Tabs defaultValue={noFilter.value}>
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

export { ProjectFilterType }
