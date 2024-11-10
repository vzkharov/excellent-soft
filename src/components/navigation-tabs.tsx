'use client'

import Link from 'next/link'
import { useMemo } from 'react'
import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'

import { useHeadings } from '~/hooks/use-headings'

import { Skeleton } from '~/components/ui/skeleton'
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'

type NavigationTabsProps = StyleProps & {
	levels: number[]
}

const NavigationTabs = ({ style, className, levels }: NavigationTabsProps) => {
	const [tabs, loading] = useHeadings(levels)

	const filteredTabs = useMemo(() => tabs.filter((tab) => !!tab.id), [tabs])

	if (loading || filteredTabs.length <= 0) {
		return (
			<div
				style={style}
				className={styles.list({ className })}
			>
				{Array.from({ length: 6 }).map((_, idx) => (
					<Skeleton
						key={idx}
						className={styles.loadingTab()}
					/>
				))}
			</div>
		)
	}

	return (
		<Tabs defaultValue={filteredTabs.at(0)?.id}>
			<TabsList
				style={style}
				className={styles.list({ className })}
			>
				{filteredTabs.map((tab) => (
					<Link
						key={tab.id}
						href={'#' + tab.id}
						className="font-gilroy"
					>
						<TabsTrigger value={tab.id}>{tab.title?.split('<')[0]}</TabsTrigger>
					</Link>
				))}
			</TabsList>
		</Tabs>
	)
}

const styles = tv({
	slots: {
		list: 'flex h-11 items-center gap-x-1.5 overflow-x-hidden overflow-y-hidden px-1 py-2',
		loadingTab: 'h-9 min-w-[128px] max-w-[128px]',
	},
})()

export { NavigationTabs }
