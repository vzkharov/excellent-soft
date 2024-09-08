import { Logo } from '~/components/logo'

import { HeaderNav } from './header-nav'

import styles from './styles.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className="flex justify-start">
				<Logo className="px-1.5 pb-1.5 pt-3 rounded-b-xl bg-black" />
			</div>
			<HeaderNav />
			<div className="flex justify-end">
				<Logo className="px-1.5 pb-1.5 pt-3 rounded-b-xl bg-black" />
			</div>
		</header>
	)
}

export { Header }
