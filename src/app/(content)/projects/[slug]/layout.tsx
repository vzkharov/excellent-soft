import Link from 'next/link'
import { tv } from 'tailwind-variants'

import type { Layout } from '~/lib/types'
import { navigation } from '~/config/navigation'

import { Footer } from '~/components/footer'

const ProjectLayout: Layout = ({ children }) => (
	<>
		<div className={styles.content()}>{children}</div>
		<Link
			href={navigation.projects.href}
			className={styles.link()}
		>
			Больше проектов
		</Link>
		<Footer />
	</>
)

const styles = tv({
	slots: {
		content: 'flex flex-col gap-y-8 pt-4',
		link: 'my-20 mx-auto flex aspect-square h-64 w-64 cursor-pointer items-center justify-center rounded-full bg-primary font-gilroy-bold text-md !text-dark hover:bg-dark hover:!text-primary  focus:bg-primary',
	},
})()

export default ProjectLayout
