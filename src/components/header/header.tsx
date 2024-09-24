import { tv } from 'tailwind-variants'

import { Logo } from '~/components/logo'
import { MenuButton } from '~/components/(buttons)/menu-button'

import { HeaderNav } from './header-nav'

const Header = () => (
	<header className={styles.header()}>
		<div className={styles.headerItem()}>
			<Logo className={styles.logo()} />
		</div>
		<div className={styles.headerItem({ className: 'max-md:hidden' })}>
			<HeaderNav />
		</div>
		<div className={styles.headerItem()}>
			<MenuButton />
		</div>
	</header>
)

const styles = tv({
	slots: {
		header: 'sticky top-0 z-20 container mx-auto flex items-center',
		headerItem: 'flex-1 flex items-center first-of-type:justify-start last-of-type:justify-end',
		logo: 'bg-gray-200 rounded-b-xl px-1.5 pb-1.5 pt-4 ',
	},
})()

export { Header }
