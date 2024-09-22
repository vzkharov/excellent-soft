import SeoMarkdown from '~/markdown/services/promotion/seo.mdx'
import SmmMarkdown from '~/markdown/services/promotion/smm.mdx'
import TargetMarkdown from '~/markdown/services/promotion/target.mdx'

const features = [
	{
		title: 'SEO',
		content: 'Эффективная базовая SEO-настройка нового сайта может быстро начать приносить плоды.',
	},
	{
		title: 'Копирайт',
		content: 'Мы пишем привлекательный и беглый текстовый текст любым голосом и стилем, соответствующим вашему бренду.',
	},
	{
		title: 'Контекстная реклама',
		content: 'Позволяет вашему бизнесу появляться в результатах поиска или на веб-страницах, где ваша целевая аудитория уже ищет информацию, связанную с вашими товарами или услугами.',
	},
	{
		title: 'SMM',
		content: 'Направляем пользователей из социальных сетей на ваш веб-сайт, что может способствовать росту продаж или получению заявок.',
	},
]

const tabs = [
	{
		id: 'seo',
		title: 'Настройка SEO',
		href: '#seo',
		markdown: <SeoMarkdown />,
	},
	{
		id: 'target',
		title: 'Контекстная реклама',
		href: '#target',
		markdown: <TargetMarkdown />,
	},
	{
		id: 'smm',
		title: 'SMM',
		href: '#smm',
		markdown: <SmmMarkdown />,
	},
]

export { tabs, features }
