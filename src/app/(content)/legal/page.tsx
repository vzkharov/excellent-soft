import { styles } from './styles'

import type { Page } from '~/lib/types'

import { Title, Text } from '~/components/ui/text'
import { Spacer } from '~/components/ui/spacer/spacer'

import { Footer } from '~/components/footer'
import { Section } from '~/components/(sections)'

import LegalMarkdown from '~/markdown/legalMarkdown.mdx'

import { LegalNavigation } from './_sections/LegalNavigation'
import { Link } from '~/components/ui/link'

const title = 'Политика \n конфиденциальности'

const LegalPage: Page = () => (
	<>
		<Section className={styles.title()}>
			<Title
				as="h2"
				uppercase
			>
				{title}
			</Title>
		</Section>

		<Spacer y="3xl" />

		<Section className={styles.section()}>
			<LegalNavigation />
			<div className={styles.inner()}>
				<LegalMarkdown />
			</div>
		</Section>

		<Footer />
	</>
)

export default LegalPage
