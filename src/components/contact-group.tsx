import { tv } from 'tailwind-variants'

import { contactConfig } from '~/config/contact'

import { Text } from '~/components/ui/text'
import { Link } from '~/components/ui/link'
import { Image } from '~/components/ui/image'

type ContactGroupProps = React.HTMLAttributes<HTMLDivElement>

const ContactGroup = ({ className, ...props }: ContactGroupProps) => (
	<div className={styles.wrapper()}>
		<Text>Мы в соц. сетях:</Text>
		<div
			{...props}
			className={styles.group({ className })}
		>
			{[
				contactConfig.instagram,
				contactConfig.behance,
				contactConfig.telegram,
				contactConfig.whatsapp,
			].map((link) => (
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
			))}
		</div>
	</div>
)

const styles = tv({
	slots: {
		wrapper: 'flex flex-col gap-y-3',
		group: 'flex items-center gap-x-5',
		link: 'w-fit',
		img: 'h-7 w-auto filter grayscale brightness-[5] hover:grayscale-0 hover:brightness-100 transition-all',
	},
})()

export { ContactGroup }
