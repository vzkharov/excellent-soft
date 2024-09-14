'use client'

import { tv } from 'tailwind-variants'

import { navigation } from '~/config/navigation'

import { XIcon } from '~/components/ui/icons/x-icon'
import { MenuIcon } from '~/components/ui/icons/menu-icon'

import { Link } from '~/components/ui/link'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'

import { FeedButton } from '~/components/(buttons)/feed-button'

const MenuButton = () => (
	<Popover>
		<PopoverTrigger className={styles.button()}>
			<XIcon className="hidden group-aria-expanded:block" />
			<MenuIcon className="group-aria-expanded:hidden" />
		</PopoverTrigger>
		<PopoverContent
			align="end"
			width={240}
			sideOffset={10}
			className={styles.popoverContent()}
		>
			<ul>
				{[
					navigation.development,
					navigation.design,
					navigation.promotion,
					navigation.works,
					navigation.instalment,
					navigation.contact,
				].map((link) => (
					<li key={link.id}>
						<Link
							href={link.href}
							className={styles.link()}
						>
							{link.name}
						</Link>
					</li>
				))}
				<FeedButton
					dir="y"
					variant="ghost"
					// fix
					className="mx-8 mt-2"
				/>
			</ul>
		</PopoverContent>
	</Popover>
)

const styles = tv({
	slots: {
		button: 'group flex h-14 w-14 items-center justify-center rounded-full',
		buttonOpenIcon: '',
		buttonCloseIcon: '',
		popoverContent: 'w-[240px] rounded-lg py-5',
		link: 'w-full px-8 py-2',
	},
})()

export { MenuButton }
