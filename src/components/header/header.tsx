import { Logo } from '~/components/logo'

import { HeaderNav } from './header-nav'

import styles from './styles.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className="flex justify-start">
				<Logo className="rounded-b-xl bg-black px-1.5 pb-1.5 pt-3" />
			</div>
			<HeaderNav />
			<div className="flex justify-end">
				<Logo className="rounded-b-xl bg-black px-1.5 pb-1.5 pt-3" />
			</div>
		</header>
	)
}

export { Header }
