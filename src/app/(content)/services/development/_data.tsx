import EcoMarkdown from '~/markdown/services/development/eco.mdx'
import B2bMarkdown from '~/markdown/services/development/b2b.mdx'
import VoiceMarkdown from '~/markdown/services/development/voice.mdx'
import EcommerceMarkdown from '~/markdown/services/development/ecommerce.mdx'
import ChatbotMarkdown from '~/markdown/services/development/chat-bot.mdx'

const features = [
	{
		title: 'Веб сайты',
		content: 'Процесс разработки сайта включает в себя несколько ключевых этапов. Мы используем экспертные разработки, тщательное тестирование и плавную интеграцию функций для обеспечения постоянного обслуживания и стабильную работу веб-сайта, а также удовлетворенность пользователей.',
	},
	{
		title: 'Веб приложения',
		content: 'Предоставление индивидуальных решений, сочетающих интуитивно понятные пользовательские интерфейсы с надежными серверными системами. Мы создаем интерактивные и масштабируемые приложения, которые улучшают взаимодействие с пользователем, повышают операционную эффективность и способствуют росту бизнеса.',
	},
]

const tabs = [
	{
		id: 'eco',
		title: 'Экономичные решения',
		href: '#eco',
		markdown: <EcoMarkdown />,
	},
	{
		id: 'b2b',
		title: 'B2B сайты',
		href: '#b2b',
		markdown: <B2bMarkdown />,
	},
	{
		id: 'ecommerce',
		title: 'Интернет-магазины',
		href: '#ecommerce',
		markdown: <EcommerceMarkdown />,
	},
	{
		id: 'chat-bot',
		title: 'Чат-боты',
		href: '#chat',
		markdown: <ChatbotMarkdown />,
	},
	{
		id: 'voice',
		title: 'Голосовой интерфейс',
		href: '#voice',
		markdown: <VoiceMarkdown />,
	},
]

const techStack = [
	{
		title: 'Frontend',
		items: [
			{ name: 'React', logo: '/tech/react.png' },
			{ name: 'Angular', logo: '/tech/angular.png' },
			{ name: 'Vue.js', logo: '/tech/vue.png' },
			{ name: 'JavaScript', logo: '/tech/js.png' },
		],
	},
	{
		title: 'Backend',
		items: [
			{ name: 'PHP', logo: '/tech/php.png' },
			{ name: 'Node.js', logo: '/tech/nodejs.png' },
			{ name: 'Java', logo: '/tech/java.png' },
			{ name: '.NET', logo: '/tech/dotnet.png' },
			{ name: 'Python', logo: '/tech/python.png' },
			{ name: 'C/C++', logo: '/tech/cpp.png' },
			{ name: 'Unity', logo: '/tech/unity.png' },
			{ name: 'Ruby', logo: '/tech/ruby.png' },
		],
	},
	{
		title: 'CMS',
		items: [{ name: 'Wordpress', logo: '/tech/wordpress.png' }],
	},
	{
		title: 'Серверная часть',
		items: [
			{ name: 'Gitlab', logo: '/tech/gitlab.png' },
			{ name: 'Github', logo: '/tech/github.png' },
			{ name: 'Kubernetes', logo: '/tech/kuber.png' },
			{ name: 'Docker', logo: '/tech/docker.png' },
		],
	},
]

export { tabs, features, techStack }
