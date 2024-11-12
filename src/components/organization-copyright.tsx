import { getCurrentYear } from '~/helpers/date'

import { Text, type TextProps } from '~/components/ui/text'

const OrganizationCopyright = (props: Omit<TextProps, 'children'>) => (
	<Text
		size="xxs"
		color="muted"
		{...props}
	>
		Copyright {getCurrentYear()} © ООО “Экселлент Софт” УНП 193682290
	</Text>
)

export { OrganizationCopyright }
