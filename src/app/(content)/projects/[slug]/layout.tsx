import { Footer } from '~/components/footer'

import type { Layout } from '~/lib/types'

const ProjectLayout: Layout = ({ children }) => (
	<>
		<div className="flex flex-col gap-y-8 pb-20 pt-4">{children}</div>
		<Footer />
	</>
)

export default ProjectLayout
