import { tv } from 'tailwind-variants'

import { contactConfig } from '~/config/contact'

import { Link } from '~/components/ui/link'
import { Image } from '~/components/ui/image'

type ContactGroupProps = React.HTMLAttributes<HTMLDivElement>

const ContactGroup = ({ className, ...props }: ContactGroupProps) => (
	<div
		{...props}
		className={styles.group({ className })}
	>
		{[contactConfig.instagram, contactConfig.behance, contactConfig.telegram, contactConfig.whatsapp].map(
			(link) => (
				<Link
					key={link.id}
					href={link.href}
					className={styles.link()}
				>
					<Image
						alt={link.name}
						src={link.img}
						width={30}
						height={30}
						className={styles.img()}
					/>
				</Link>
			),
		)}
	</div>
)

const styles = tv({
	slots: {
		group: 'flex items-center gap-x-5',
		link: 'w-fit',
		img: 'h-8 w-8 filter grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition-all',
	},
})()

export { ContactGroup }
