import { tv } from 'tailwind-variants'

import { Text } from '~/components/ui/text'
import { Link } from '~/components/ui/link'
import { Spacer } from '~/components/ui/spacer/spacer'

import Description from '~/markdown/legal-description.mdx'

const DescriptionSection = () => (
	<>
		<div className={styles.section()}>
			<Description />

			<Spacer y="3xl" />

			<Text
				bold
				as="h5"
				id="privacy-policy"
			>
				Политика конфиденциальности
			</Text>
			<Spacer y="xl" />
			<Text>
				С нашей политикой конфиденциальности вы можете ознакомиться{' '}
				<Link
					href="#"
					download="privacy-policy.pdf"
				>
					здесь
				</Link>
				.
			</Text>
		</div>
	</>
)

export { DescriptionSection }

const styles = tv({
	slots: {
		section: 'w-full md:w-1/2',
	},
})()
