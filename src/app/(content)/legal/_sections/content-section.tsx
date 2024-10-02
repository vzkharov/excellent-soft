import { tv } from 'tailwind-variants'

import { Text } from '~/components/ui/text'
import { Spacer } from '~/components/ui/spacer/spacer'

const ContentSection = () => (
	<>
		<div className={styles.section()}>
			<div className={styles.sticky()}>
				<Text
					bold
					as="h5"
				>
					Содержание
				</Text>
				<Spacer y="xl" />
				<ul className={styles.list()}>
					{[
						{
							title: 'Что такое файлы cookie?',
							href: '#cookies',
						},
						{
							title: 'Зачем мы обрабатываем файлы cookie?',
							href: '#why-cookies',
						},
						{
							title: 'Как настроить файлы cookie?',
							href: '#how-cookies',
						},
						{
							title: 'Политика конфиденциальности',
							href: '#privacy-policy',
						},
					].map((item, idx) => (
						<li key={[idx, 'content'].join('-')}>
							<a href={item.href}>
								<Text>{item.title}</Text>
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	</>
)

export { ContentSection }

const styles = tv({
	slots: {
		section: 'hidden md:block md:w-1/2',
		sticky: 'sticky top-28',
		list: 'list-none space-y-2',
	},
})()
