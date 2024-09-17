import { tv } from 'tailwind-variants'

import type { StyleProps } from '~/lib/types'

import { legalConfig } from '~/config/legal'

import { Text } from '~/components/ui/text'
import { Link } from '~/components/ui/link'
import { Checkbox, type CheckboxProps } from '~/components/ui/checkbox'

type AgreementCheckboxProps = Pick<CheckboxProps, 'id' | 'name' | 'required' | 'color'> & StyleProps

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
				href={legalConfig.privacy.url}
			>
				{legalConfig.privacy.name}
			</Link>
		</Text>
	</div>
)

const styles = tv({
	slots: {
		container: 'flex items-center gap-x-3',
		label: 'select-none',

		// fix
		link: 'w-fit cursor-pointer font-gilroy text-xs underline',
	},
})()

export { AgreementCheckbox }
