import { tv } from 'tailwind-variants'

import type { Page } from '~/lib/types'

import { Image } from '~/components/ui/image'

import { Section } from '~/components/(sections)'
import { ContactSection } from '~/components/(sections)/contact-section'

import ContactMarkdown from '~/markdown/contact.mdx'

const ContactPage: Page = () => (
	<Section
		// color="dark"
		className={styles.page()}
	>
		<div className={styles.inner()}>
			<ContactSection className={styles.card()}>
				<div>
					<ContactMarkdown />
				</div>
				<Image
					alt="map"
					src="/map.png"
					width={1000}
					height={500}
					className={styles.bgImage()}
				/>
			</ContactSection>

			<a className={styles.phone()}>+375 29 633 42 12</a>
		</div>
	</Section>
)

const styles = tv({
	slots: {
		page: 'min-h-[80vh] flex items-center px-0',
		inner: 'w-full pt-8 pb-16 flex justify-between',

		card: 'relative overflow-hidden max-w-4xl flex-1 rounded-lg bg-gray-200 px-10 py-14 text-white backdrop-blur-xl [&>*]:max-w-sm',

		phone: [
			'h-fit self-end justify-self-end cursor-pointer',
			'rounded-full bg-black px-5 py-3 font-gilroy-bold text-white',
		],
		bgImage: 'absolute top-0 left-0 h-full w-auto -z-10 select-none !max-w-none opacity-30',
	},
})()

export default ContactPage
