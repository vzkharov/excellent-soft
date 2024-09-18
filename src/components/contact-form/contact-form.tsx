import { tv } from 'tailwind-variants'

import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'

import { AgreementCheckbox } from '~/components/agreement-checkbox'

import { formConfig } from './utils'
// import { submitHubspot } from './action'

type ContactFormProps = React.HTMLAttributes<HTMLFormElement>

const ContactForm = ({ className, ...props }: ContactFormProps) => (
	<form
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
			id="agreement"
			name="agreement"
			variant="foreground"
			className={styles.agreement()}
		/>

		<Button
			bold
			full
			size="lg"
			variant="gradient"
			className={styles.submitButton()}
		>
			Отправить
		</Button>
	</form>
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
