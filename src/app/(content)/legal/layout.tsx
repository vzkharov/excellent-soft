import { Fragment } from 'react'

import type { Layout } from '~/lib/types'

import { Title } from '~/components/ui/text'
import { Spacer } from '~/components/ui/spacer'

import { ToC } from '~/components/toc'
import { Footer } from '~/components/footer'
import { Section } from '~/components/(sections)'

import { styles } from './styles'

const title = 'Политика \n конфиденциальности'

const LegalLayout: Layout = async ({ children }) => (
	<Fragment>
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
			<ToC
				levels={[5]}
				className={styles.toc()}
			/>
			<div className={styles.inner()}>{children}</div>
		</Section>

		<Footer />
	</Fragment>
)

export default LegalLayout
