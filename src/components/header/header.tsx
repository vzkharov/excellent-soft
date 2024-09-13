import { tv } from 'tailwind-variants'

import { Logo } from '~/components/logo'
import { Section } from '~/components/section'
import { BurgerButton } from '~/components/(buttons)/burger-button'

import { HeaderNav } from './header-nav'

const Header = () => (
	<Section
		as="header"
		className={styles.header()}
	>
		<div className={styles.headerItem()}>
			<Logo className={styles.logo()} />
		</div>
		<div className={styles.headerItem()}>
			<HeaderNav />
		</div>
		<div className={styles.headerItem()}>
			<BurgerButton />
		</div>
	</Section>
)

const styles = tv({
	slots: {
		header: 'flex items-center',
		headerItem: 'flex-1 flex items-center first-of-type:justify-start last-of-type:justify-end',

		logo: 'bg-content-100 rounded-b-xl px-1.5 pb-1.5 pt-4',
	},
})()

export { Header }
