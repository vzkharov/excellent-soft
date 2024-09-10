import type { Page } from '~/lib/types'

const HomePage: Page = () => {
	return (
		<section className="container h-96 bg-muted">
			<h1>H1 Веб-студия</h1>
			<h2>h2 сайты и веб сервисы </h2>
			<h3>h3 Ритейл</h3>
			<h4>h4 Лендинг</h4>
			<h5>Н5 Решения</h5>
			<h6>Н6 Дней</h6>
			<p className="large">Text Дней</p>
			<p>Text Дней</p>
			<p className="small">Text Дней</p>
		</section>
	)
}

export default HomePage
