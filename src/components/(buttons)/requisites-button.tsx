import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'
import { navigation } from '~/config/navigation'

import { Link } from '~/components/ui/link'
import { Button } from '~/components/ui/button'
import { ArrowDownIcon } from '~/components/ui/icons/arrow-down-icon'

const RequisitesButton = ({ style, className }: StyleProps) => (
	<div
		style={style}
		className={styles.button({ className })}
	>
		<span>{navigation.requisites.name}</span>
		<Link
			target="_blank"
			href={navigation.requisites.href}
		>
			<Button
				size="icon"
				variant="shadow"
			>
				<ArrowDownIcon size="1.25em" />
			</Button>
		</Link>
	</div>
)

const styles = tv({
	slots: {
		button: 'flex items-center gap-x-3',
	},
})()

export { RequisitesButton }
