import { tabs } from './_data'

import { styles } from './styles'

import type { Page } from '~/lib/types'

import { Link } from '~/components/ui/link'
import { Footer } from '~/components/footer'
import { Title } from '~/components/ui/text'
import { Section } from '~/components/(sections)'
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'

import { createMetadata } from '~/lib/metadata'

import { navigation } from '~/config/navigation'

import Porfolio from '~/markdown/portfolio/portfolio.mdx'

const title = 'Sarpedor hotel - промо страница \n для бутик-отеля в анталье'

const ProjectsPage: Page = async () => (
	<>
		<Section className={styles.filters()}>
			<Tabs defaultValue={tabs.at(0)?.id}>
				<TabsList>
					{tabs.map((tab) => (
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
		</Section>

		<Section className={styles.title()}>
			<Title as="h2">{title}</Title>
		</Section>

		<Porfolio />

		<Link
			href={navigation.projects.href}
			className={styles.link()}
		>
			Больше проектов
		</Link>

		<Footer />
	</>
)

export const metadata = createMetadata(navigation.projects)

export default ProjectsPage
