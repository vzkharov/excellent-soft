import { tv } from 'tailwind-variants'

import { ContactForm } from '~/components/contact-form'

type ContactSectionProps = React.HTMLAttributes<HTMLDivElement>

const ContactSection = ({ children, className, ...props }: ContactSectionProps) => (
	<section
		{...props}
		className={styles.section({ className })}
	>
		{children}
		<ContactForm />
	</section>
)

const styles = tv({
	slots: {
		section: 'flex justify-between max-w-screen-lg',
	},
})()

export { ContactSection }
