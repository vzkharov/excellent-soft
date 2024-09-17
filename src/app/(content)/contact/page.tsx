import { tv } from 'tailwind-variants'

import type { Page } from '~/lib/types'

import { Image } from '~/components/ui/image'

import { Section } from '~/components/section'
import { ContactSection } from '~/components/(sections)/contact-section'

import ContactMarkdown from '~/markdown/contact.mdx'

const ContactPage: Page = () => (
	<Section className={styles.section()}>
		<ContactSection className={styles.card()}>
			<div>
				<ContactMarkdown />
			</div>
		</ContactSection>

		<span className={styles.phone()}>+375 29 633 42 12</span>

		<Image
			alt="map"
			src="/map.png"
			width={1000}
			height={500}
			className={styles.bgImage()}
		/>
	</Section>
)

const styles = tv({
	slots: {
		section: 'my-8 flex justify-between',
		card: 'h-fit max-w-4xl flex-1 rounded-lg bg-white/10 px-10 py-14 text-white backdrop-blur-xl [&>*]:max-w-sm',
		phone: 'hover:brightness-70 h-fit cursor-pointer self-end rounded-full bg-black px-5 py-3 font-gilroy-bold text-white transition-opacity',

		bgImage: 'absolute inset-x-0 top-0 -z-10 h-auto w-screen select-none',
	},
})()

export default ContactPage
