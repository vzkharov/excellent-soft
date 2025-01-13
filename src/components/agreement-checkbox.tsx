import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'

import { navigation } from '~/config/navigation'

import { Text } from '~/components/ui/text'
import { Link } from '~/components/ui/link'
import { Checkbox, type CheckboxProps } from '~/components/ui/checkbox'

type AgreementCheckboxProps = Pick<CheckboxProps, 'id' | 'name' | 'required' | 'variant'> & StyleProps

const AgreementCheckbox = ({ id, className, ...props }: AgreementCheckboxProps) => (
	<div className={styles.container({ className })}>
		<Checkbox
			{...props}
			id={id}
		/>
		<Text
			as="label"
			size="xs"
			htmlFor={id}
			className={styles.label()}
		>
			Отправляя заявку, вы соглашаетесь с нашей&nbsp;
			<Link
				className={styles.link()}
				href={navigation.privacy.href}
			>
				{navigation.privacy.name}
			</Link>
		</Text>
	</div>
)

const styles = tv({
	slots: {
		container: 'flex items-center gap-x-3',
		label: 'select-none max-w-fit min-w-0 text-wrap',

		// fix
		link: 'w-fit cursor-pointer font-gilroy text-xs underline',
	},
})()

export { AgreementCheckbox }
