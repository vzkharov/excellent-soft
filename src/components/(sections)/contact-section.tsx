import { tv } from 'tailwind-variants'

import { ContactForm, ContactFormProps } from '~/modules/contact-form'

type ContactSectionProps = React.HTMLAttributes<HTMLDivElement> & Pick<ContactFormProps, 'variant'>

const ContactSection = ({ children, className, variant, ...props }: ContactSectionProps) => (
	<section
		{...props}
		className={styles.section({ className })}
	>
		{children}
		<ContactForm variant={variant} />
	</section>
)

const styles = tv({
	slots: {
		section: 'flex flex-col lg:flex-row gap-y-12 justify-between w-full max-lg:px-5',
	},
})()

export { ContactSection }
