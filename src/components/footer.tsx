import { Fragment } from 'react'
import { tv } from 'tailwind-variants'

import { navigation } from '~/config/navigation'
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
	<Fragment>
		<FeedSection />

		<Section
			as="div"
			color="black"
			title="Опишите задачу"
			className={styles.container()}
		>
			<Spacer y="3xl" />

			<ContactSection>
				<div>
					<Title as="h2">
						Мы{' '}
						<span className="bg-black text-primary max-sm:leading-[3rem]">
							уже <br /> приступили{' '}
						</span>{' '}
						<br /> к работе!
					</Title>
					<Spacer y="2xl" />
					<Text color="link">hello@esoft.by</Text>
				</div>
			</ContactSection>

			<Spacer y="4xl" />

			<footer className={styles.footer()}>
				<Logo className={styles.logo()} />

				<div className={styles.footerSection()}>
					<Text bold>{'Время работы:'}</Text>
					<Text>{'Пн. - пт.: 10.00 - 18.00'}</Text>
				</div>

				<div className={styles.footerSection()}>
					{[navigation.privacy, navigation.cookie].map((link) => (
						<Link
							full
							key={link.id}
							href={link.href}
							className={styles.footerLink()}
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
	</Fragment>
)

const styles = tv({
	slots: {
		bg: 'bg-gradient-to-r from-gray-200 to-dark',
		container: 'pb-8 pt-14 text-white px-0',
		contactForm: 'max-w-xl',

		logo: 'h-9',
		footer: 'flex flex-col md:flex-row justify-between gap-y-8 gap-x-4 pt-6 border-t border-gray-900/10',
		footerSection: 'text-xs space-y-2',
		footerLink: 'font-gilroy text-xs leading-none',
	},
})()

export { Footer }
