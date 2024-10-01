import { tv } from 'tailwind-variants'

import { legalConfig } from '~/config/legal'

import { Link } from '~/components/ui/link'
import { Spacer } from '~/components/ui/spacer'
import { Text, Title } from '~/components/ui/text'

import { Logo } from '~/components/logo'
import { Section } from '~/components/(sections)'
import { ContactGroup } from '~/components/contact-group'
import { FeedSection } from '~/components/(sections)/feed-section'
import { ContactSection } from '~/components/(sections)/contact-section'
import { OrganizationCopyright } from '~/components/organization-copyright'

const Footer = () => (
	<>
		<div className="-mb-24">
			<FeedSection />
		</div>

		<Section
			as="div"
			color="metal"
			title="Опишите задачу"
			className={styles.container()}
		>
			<Spacer y="3xl" />

			<ContactSection>
				<div className="space-y-7">
					<Title as="h2">
						Мы уже <br /> приступили <br /> к работе!
					</Title>
					<Text color="link">hello@esoft.by</Text>
				</div>
			</ContactSection>

			<Spacer y="4xl" />

			<footer className={styles.footer()}>
				<Logo className={styles.logo()} />

				<div className={styles.footerSection()}>
					<Text font="gilroy-bold">{'Время работы:'}</Text>
					<Text>{'Пн. - пт.: 10.00 - 18.00'}</Text>
				</div>

				<div className={styles.footerSection()}>
					{[legalConfig.privacy, legalConfig.cookie].map((link) => (
						<Link
							full
							key={link.id}
							href={link.url}
							className="font-gilroy text-xs leading-none"
						>
							{link.name}
						</Link>
					))}
				</div>

				<ContactGroup />
			</footer>

			<Spacer y="md" />

			<OrganizationCopyright />
		</Section>
	</>
)

const styles = tv({
	slots: {
		bg: 'bg-gradient-to-r from-gray-200 to-dark',
		container: 'pb-8 pt-14 text-white',
		contactForm: 'max-w-xl',

		footer: 'flex flex-col md:flex-row justify-between gap-y-8 gap-x-4 pt-6 border-t border-gray-900/10',
		logo: 'h-9',
		footerSection: 'text-xs space-y-2',
	},
})()

export { Footer }
