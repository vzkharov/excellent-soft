import * as React from 'react'
import Link from 'next/link'
import { tv } from 'tailwind-variants'

import { appNavConfig } from '~/config/nav'

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '~/components/ui/navigation-menu'

const HeaderNav = () => (
	<NavigationMenu>
		<NavigationMenuList className="space-x-3">
			<NavigationMenuItem>
				<NavigationMenuTrigger>{appNavConfig.services.name}</NavigationMenuTrigger>
				<NavigationMenuContent>
					<ul className="flex w-[180px] flex-col items-stretch gap-y-2.5 py-4">
						{[
							appNavConfig.design,
							appNavConfig.development,
							appNavConfig.promotion,
						].map((link) => (
							<li key={link.id}>
								<Link
									href={link.href}
									className="px-4 py-2.5"
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</NavigationMenuContent>
			</NavigationMenuItem>
			{[appNavConfig.works, appNavConfig.instalment].map((link) => (
				<NavigationMenuItem key={link.id}>
					<Link
						href={link.href}
						className={navigationMenuTriggerStyle()}
					>
						{link.name}
					</Link>
				</NavigationMenuItem>
			))}
		</NavigationMenuList>
	</NavigationMenu>
)

const styles = tv({
	slots: {},
})

export { HeaderNav }
