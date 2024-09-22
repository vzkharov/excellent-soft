import type { ReactChildren } from '~/lib/types'

import Faq01 from '~/markdown/faq/01.mdx'
import Faq02 from '~/markdown/faq/02.mdx'
import Faq03 from '~/markdown/faq/03.mdx'
import Faq04 from '~/markdown/faq/04.mdx'
import Faq05 from '~/markdown/faq/05.mdx'

type FaqConfig = {
	id: string
	title: string
	content: ReactChildren
	image?: string
}

const faqConfig = [
	{
		id: '1',
		title: 'Запустить новый продукт на рынок',
		content: <Faq01 />,
		image: '',
	},
	{
		id: '2',
		title: 'Обновить старый сайт',
		content: <Faq02 />,
		image: '',
	},
	{
		id: '3',
		title: 'Привести больше клиентов',
		content: <Faq03 />,
		image: '',
	},
	{
		id: '4',
		title: 'Оптимизировать бизнес-процессы',
		content: <Faq04 />,
		image: '',
	},
	{
		id: '5',
		title: 'Привлечь потенциальных партнеров',
		content: <Faq05 />,
		image: '',
	},
] satisfies FaqConfig[]

export { faqConfig }
