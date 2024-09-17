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
				className={styles.input()}
			/>
		))}

		<AgreementCheckbox
			id="agreement"
			name="agreement"
			className={styles.agreement()}
		/>

		<Button
			size="lg"
			// fix with button variant
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
		submitButton:
			'font-gilroy-bold text-md w-full rounded-full py-3 bg-gradient-to-r from-gradient-start to-gradient-end text-dark mt-12 hover:opacity-75 transition-opacity',
	},
})()

export { ContactForm }
