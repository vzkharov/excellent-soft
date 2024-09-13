import './styles.css'

import type { Page } from '~/lib/types'

import { Title } from '~/components/ui/text'
import { Section } from '~/components/section'

import InstallmentMarkdown from '~/markdown/instalment.mdx'

const InstalmentPage: Page = () => (
	<>
		<Section
			as="span"
			bg="mb-6 mt-12"
		>
			<Title
				as="h2"
				font="bebas"
				gradient
			>
				Мы идем вам на встречу
			</Title>
		</Section>
		<Section
			bg="bg-gradient-to-r from-content-200 to-content-100 py-10"
			className="rounded-lg bg-gradient-to-r from-background/10 to-content-200 p-10 text-background"
		>
			<div className="prose flex max-w-prose flex-col gap-y-6">
				<InstallmentMarkdown />
			</div>
		</Section>
	</>
)

export default InstalmentPage
