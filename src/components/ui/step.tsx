import { tv, type VariantProps } from 'tailwind-variants'

import { padIndex } from '~/helpers/string'
import type { StyleProps } from '~/lib/types'

import { Text } from './text'

type StepProps = StyleProps &
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
	base: 'w-fit text-sm',
	variants: {
		variant: {
			default: 'p-px font-gilroy-bold hover:bg-primary hover:text-dark',
			primary: 'p-px font-gilroy-bold bg-primary text-dark',

			shadow: "bg-dark/5 text-gray-300 rounded-full px-4 py-0.5 before:inline-flex before:content-['/'] select-none",
		},
	},
	defaultVariants: {
		variant: 'default',
	},
})

type StepVariants = VariantProps<typeof stepVariants>

export { Step }
