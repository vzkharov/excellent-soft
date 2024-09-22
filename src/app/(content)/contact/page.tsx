import { tv } from 'tailwind-variants'

import type { Page } from '~/lib/types'

import { Image } from '~/components/ui/image'

import { Section } from '~/components/(sections)'
import { BackgroundImage } from '~/components/background-image'
import { ContactSection } from '~/components/(sections)/contact-section'

import ContactMarkdown from '~/markdown/contact.mdx'

const ContactPage: Page = () => (
	<Section className={styles.page()}>
		<div className={styles.inner()}>
			<ContactSection className={styles.card()}>
				<div>
					<ContactMarkdown />
				</div>
			</ContactSection>

			<a className={styles.phone()}>+375 29 633 42 12</a>
		</div>

		<BackgroundImage>
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

const styles = tv({
	slots: {
		page: 'min-h-[80vh] flex items-center px-0',
		inner: 'w-full pt-8 pb-16 flex justify-between flex-col md:flex-row gap-y-4',

		card: 'relative overflow-hidden max-w-4xl flex-1 rounded-md md:rounded-lg bg-gray-200 px-6 py-8 md:px-10 md:py-14 text-white backdrop-blur-xl [&>*]:max-w-sm',

		phone: [
			'h-fit self-end justify-self-end cursor-pointer',
			'rounded-full bg-black px-5 py-3 font-gilroy-bold text-white',
		],

		bgImage: 'h-full w-auto -z-10 select-none !max-w-none opacity-50',
	},
})()

export default ContactPage
