import type { Page } from '~/lib/types'
import { createMetadata } from '~/lib/metadata'

import { navigation } from '~/config/navigation'
import { contactConfig } from '~/config/contact'

import { Image } from '~/components/ui/image'

import { Section } from '~/components/(sections)'
import { BackgroundImage } from '~/components/background-image'
import { ContactSection } from '~/components/(sections)/contact-section'

import ContactMarkdown from '~/markdown/contact.mdx'

import { styles } from './styles'

const ContactPage: Page = () => (
	<Section className={styles.page()}>
		<div className={styles.inner()}>
			<ContactSection className={styles.card()}>
				<ContactMarkdown />
			</ContactSection>

			<a className={styles.phone()}>{contactConfig.phone.value}</a>
		</div>

		<BackgroundImage className="h-screen">
			<Image
				alt="map"
				src="/map.png"
				width={1000}
				height={500}
				className={styles.bgImage()}
			/>
		</BackgroundImage>
	</Section>
)

export const metadata = createMetadata(navigation.contact)

export default ContactPage
