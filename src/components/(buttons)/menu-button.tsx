'use client'

import { useState } from 'react'
import { tv } from 'tailwind-variants'

import { navigation } from '~/config/navigation'

import { XIcon } from '~/components/ui/icons/x-icon'
import { MenuIcon } from '~/components/ui/icons/menu-icon'

import { Link } from '~/components/ui/link'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'

import { FeedButton } from '~/components/(buttons)/feed-button'

const MenuButton = () => {
	const [open, setOpen] = useState<boolean>(false)

	return (
		<Popover
			open={open}
			onOpenChange={setOpen}
		>
			<PopoverTrigger className={styles.button()}>
				<XIcon className={styles.buttonCloseIcon()} />
				<MenuIcon className={styles.buttonOpenIcon()} />
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
						navigation.web_3,
						navigation.design,
						navigation.promotion,
						navigation.projects,
						navigation.payment,
						navigation.contact,
					].map((link) => (
						<li key={link.id}>
							<Link
								href={link.href}
								variant="primary"
								onClick={() => setOpen(false)}
								className={styles.link()}
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>

				<div className={styles.feedWrapper()}>
					<FeedButton
						bold
						dir="y"
						variant="secondary"
						className={styles.feed()}
					/>
				</div>
			</PopoverContent>
		</Popover>
	)
}

const styles = tv({
	slots: {
		button: 'group flex h-14 w-14 items-center justify-center rounded-full',
		buttonOpenIcon: 'group-aria-expanded:hidden',
		buttonCloseIcon: 'hidden group-aria-expanded:block',

		popoverContent: 'w-[240px] rounded-lg py-5',
		link: 'w-full px-8 py-2',

		feed: 'w-full justify-between px-4 text-left [&>*]:justify-between',
		feedWrapper: 'mx-4 mt-1',
	},
})()

export { MenuButton }
