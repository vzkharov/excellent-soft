'use client'

import { tv } from 'tailwind-variants'
import { usePathname } from 'next/navigation'

import { navigation } from '~/config/navigation'

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '~/components/ui/navigation-menu'
import { Link } from '~/components/ui/link'

const HeaderNav = () => {
	const pathname = usePathname()

	return (
		<NavigationMenu className="">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger
						aria-checked={pathname.includes(navigation.services.href)}
						className={styles.popoverTrigger()}
					>
						{navigation.services.name}
					</NavigationMenuTrigger>
					<NavigationMenuContent className={styles.popoverContent()}>
						<ul>
							{[
								navigation.design,
								navigation.development,
								navigation.promotion,
							].map((link) => (
								<li key={link.id}>
									<Link
										href={link.href}
										className={styles.popoverLink()}
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				{[navigation.projects, navigation.web_3].map((link) => (
					<NavigationMenuItem key={link.id}>
						<Link
							href={link.href}
							className={styles.navLink()}
							aria-checked={pathname.includes(link.href)}
						>
							{link.name}
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	)
}

const styles = tv({
	slots: {
		navLink: navigationMenuTriggerStyle({ as: 'link' }),
		popoverContent: 'w-[180px] py-3',
		popoverLink: 'px-5 py-1.5 text-gray-700 hover:text-white focus:text-white',
		popoverTrigger: navigationMenuTriggerStyle({ as: 'button' }),
	},
})()

export { HeaderNav }
