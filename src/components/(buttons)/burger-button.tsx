'use client'

import { cn } from '~/lib/utils'

import { Icon } from '~/components/ui/icon'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'

import { useToggle } from '~/hooks/use-toggle'
import { appNavConfig } from '~/config/nav'
import Link from 'next/link'

const BurgerButton = () => {
	const [open, { set }] = useToggle()

	return (
		<Popover onOpenChange={set}>
			<PopoverTrigger
				className={cn(
					'group flex aspect-square h-14 w-14 items-center justify-center rounded-full',
					open ? 'bg-background text-foreground' : ' bg-content-200 text-background',
				)}
			>
				<Icon
					name="x"
					size={30}
					className="group-[[aria-expanded=false]]:hidden"
				/>
				<Icon
					name="menu"
					size={30}
					className="group-[[aria-expanded=true]]:hidden"
				/>
			</PopoverTrigger>
			<PopoverContent
				asChild
				align="end"
				sideOffset={10}
			>
				<ul className="flex w-[240px] flex-col gap-y-4 rounded-lg py-6">
					{[
						appNavConfig.development,
						appNavConfig.design,
						appNavConfig.promotion,
						appNavConfig.works,
						appNavConfig.instalment,
						appNavConfig.contact,
					].map((link) => (
						<li key={link.id}>
							<Link
								href={link.href}
								className="px-8 py-2.5"
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</PopoverContent>
		</Popover>
	)
}

export { BurgerButton }
