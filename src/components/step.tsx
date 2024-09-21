import { tv, type VariantProps } from 'tailwind-variants'

import { padIndex } from '~/helpers/string'

import { Text, type TextProps } from '~/components/ui/text'

type StepProps = Pick<TextProps, 'style' | 'className' | 'size' | 'gradient'> &
	StepVariants & {
		count?: number
	}

const Step = ({ className, count = 1, variant = 'default', ...props }: StepProps) => (
	<Text
		{...props}
		className={stepVariants({ variant, className })}
	>
		{padIndex(count, 2)}
	</Text>
)

const stepVariants = tv({
	base: 'w-fit',
	variants: {
		variant: {
			default: 'p-px font-gilroy-bold hover:bg-primary hover:text-dark',
			primary: 'p-px font-gilroy-bold bg-primary text-dark',

			shadow: 'bg-gray-900 rounded-full px-4 py-1',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
})

type StepVariants = VariantProps<typeof stepVariants>

export { Step }
