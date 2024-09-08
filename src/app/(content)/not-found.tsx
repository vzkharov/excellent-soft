import Link from 'next/link'

import type { Page } from '~/lib/types'

import { Button } from '~/components/ui/button'

import { NotFoundImage } from '~/components/(images)/not-found'

const NotFound: Page = () => (
	<>
		<NotFoundImage />
		<Link href="/">
			<Button color="primary">Вернуться на главную</Button>
		</Link>
	</>
)

export default NotFound
