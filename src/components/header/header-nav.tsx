'use client'

import * as React from 'react'
import Link from 'next/link'

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '~/components/ui/navigation-menu'

const HeaderNav = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Услуги</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="">
							<li className="">
								<NavigationMenuLink asChild></NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link
						href="/works"
						legacyBehavior
						passHref
					>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Портфолио
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link
						href="/instalment"
						legacyBehavior
						passHref
					>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							В рассрочку
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

export { HeaderNav }
