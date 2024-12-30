import { tv } from 'tailwind-variants'

import { Input } from '~/components/ui/input'
import { AgreementCheckbox } from '~/components/agreement-checkbox'

import { HubSpotForm, SubmitButton, type HubSpotFormProps } from '~/modules/hub-spot-form'

import { formConfig } from './utils'

const ContactForm = ({ className, ...props }: HubSpotFormProps) => (
	<HubSpotForm
		{...props}
		className={styles.form({ className })}
	>
		{formConfig.map((field) => (
			<Input
				key={field.name}
				{...field}
				variant="foreground"
				className={styles.input()}
			/>
		))}

		<AgreementCheckbox
			required
			id="agreement"
			name="agreement"
			variant="foreground"
			className={styles.agreement()}
		/>

		<SubmitButton
			bold
			size="lg"
			variant="outlined"
			className={styles.submitButton()}
		>
			Отправить
		</SubmitButton>
	</HubSpotForm>
)

const styles = tv({
	slots: {
		form: 'flex flex-col',
		input: 'mt-7 first-of-type:mt-0',
		agreement: 'mt-4',
		submitButton: 'py-3 mt-12',
	},
})()

export { ContactForm }
