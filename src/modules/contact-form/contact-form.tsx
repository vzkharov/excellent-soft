import { tv } from 'tailwind-variants'

import { Input } from '~/components/ui/input'
import { AgreementCheckbox } from '~/components/agreement-checkbox'

import { HubSpotForm, SubmitButton, type HubSpotFormProps } from '~/modules/hub-spot-form'

import { formConfig } from './utils'

type ContactFormProps = HubSpotFormProps & {
	variant?: 'default' | 'foreground'
}

const ContactForm = ({ className, variant = 'default', ...props }: ContactFormProps) => {
	const styles = formVariants({ variant })
	return (
		<HubSpotForm
			{...props}
			className={styles.form({ className })}
		>
			{formConfig.map((field) => (
				<Input
					key={field.name}
					{...field}
					variant={variant}
					className={styles.input()}
				/>
			))}

			<AgreementCheckbox
				required
				id="agreement"
				name="agreement"
				variant={variant}
				className={styles.agreement()}
			/>

			<SubmitButton
				bold
				size="lg"
				variant={variant}
				className={styles.submitButton()}
			>
				Отправить
			</SubmitButton>
		</HubSpotForm>
	)
}

const formVariants = tv({
	variants: {
		variant: {
			default: {
				form: 'bg-white md:py-16 md:px-20 py-6 px-3 rounded-md',
				agreement: 'text-black',
			},
			foreground: {
				form: ' bg-transparent',
				agreement: 'text-white',
				submitButton: 'w-full',
			},
		},
	},
	slots: {
		form: 'flex flex-col',
		input: 'mt-7 first-of-type:mt-0',
		agreement: 'mt-6',
		submitButton: 'py-3 mt-14',
	},
})

export { ContactForm }
export type { ContactFormProps }
