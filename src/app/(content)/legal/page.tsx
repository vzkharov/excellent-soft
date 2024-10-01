import type { Page } from '~/lib/types'

import { Title, Text } from '~/components/ui/text'
import { Spacer } from '~/components/ui/spacer/spacer'

import { Footer } from '~/components/footer'
import { Section } from '~/components/(sections)'

import { styles } from './styles'
import { Link } from '~/components/ui/link'

const LegalPage: Page = () => (
	<>
		<Section className={styles.title()}>
			<Title as="h2">
				ПОЛИТИКА <br />
				КОНФИДЕНЦИАЛЬНОСТИ
			</Title>
		</Section>
		<Spacer y="3xl" />
		<Section className={styles.section()}>
			<div className="md:w-1/2">
				<div className="sticky top-28">
					<Text
						bold
						as="h5"
					>
						Содержание
					</Text>
					<Spacer y="xl" />
					<ul className="list-none space-y-3">
						<li>
							<a href="#cookies">
								<Text>Что такое файлы cookie?</Text>
							</a>
						</li>
						<li>
							<a href="#why-cookies">
								<Text>Зачем мы обрабатываем файлы cookie?</Text>
							</a>
						</li>
						<li>
							<a href="#how-cookies">
								<Text>Как настроить файлы cookie?</Text>
							</a>
						</li>
						<li>
							<a href="#privacy-policy">
								<Text>Политика конфиденциальности</Text>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="w-full md:w-1/2">
				<Text
					bold
					as="h5"
					id="cookies"
				>
					Что такое файлы cookie?
				</Text>

				<Spacer y="xl" />
				<Text>
					Файлы cookie — это небольшие текстовые файлы, которые используются для хранения
					небольших фрагментов информации. Файлы сookie, как правило,  собираются,
					систематизируются, хранятся, изменяются, используются, обезличиваются,
					блокируются, удаляются с использованием средств автоматизации. Файлы cookie
					сохраняются на вашем устройстве, в тот момент, когда когда загружается в вашем
					браузере интернет-сайт  ООО "Экселлент Софт" (esoft.by, далее — сайт). Эти файлы
					cookie помогают нам обеспечить правильную работу веб-сайта, сделать веб-сайт
					более безопасным, улучшить пользовательский опыт и понять, как работает
					веб-сайт, а также проанализировать, что работает, а что требует улучшения.
				</Text>
				<Spacer y="3xl" />
				<Text
					bold
					as="h5"
					id="why-cookies"
				>
					Зачем мы обрабатываем файлы cookie?
				</Text>
				<Spacer y="xl" />
				<Text>
					Как и большинство онлайн-сервисов, наш сайт использует файлы cookie для
					различных целей. Файлы cookie в основном необходимы для правильной работы сайта,
					и они не собирают никаких ваших персональных данных.
				</Text>
				<Spacer y="md" />
				<Text>
					Файлы cookie на нашем сайте используются в основном для понимания того, как
					работает сайт, как вы взаимодействуете с нашим сайтом, для обеспечения
					безопасности наших услуг, предоставления рекламы, которая вам актуальна, и в
					целом для предоставления вам улучшенного пользовательского опыта и ускорения
					вашего будущего взаимодействия с нашим сайтом.
				</Text>
				<Spacer y="3xl" />
				<Text
					bold
					as="h5"
					id="how-cookies"
				>
					Как настроить блокировку или включить уведомления об обработке файлов cookie?
				</Text>
				<Spacer y="xl" />
				<Text>
					Ниже мы приведём список ссылок (ссылки являются внешними), по которым вы сможете
					настроить свои браузеры в отношении блокировки и/или уведомлений о файлах
					cookie.
				</Text>
				<Spacer y="md" />
				<ul className=" list-none space-y-2">
					<li>
						<Text>
							[Firefox]{' '}
							<Link
								href="#"
								variant="underline"
								className="block w-full truncate"
							>
								(https://support.mozilla.org/ru/kb/udalenie-kukov-dlya-udaleniya-informacii-kotoruyu-)
							</Link>
						</Text>
					</li>
					<li>
						<Text>
							[Chrome]{' '}
							<Link
								href="#"
								variant="underline"
								className="block w-full truncate"
							>
								(https://support.google.com/chrome/answer/95 647?hl="ru.)
							</Link>
						</Text>
					</li>
					<li>
						<Text>
							[Opera:]{' '}
							<Link
								href="#"
								variant="underline"
								className="block w-full truncate"
							>
								(https://help.opera.com/ru/latest/web-preferences/#Управление-файлами-cookie)
							</Link>
						</Text>
					</li>
					<li>
						<Text>
							[Safari:]{' '}
							<Link
								href="#"
								variant="underline"
								className="block w-full truncate"
							>
								(https://support.apple.com/ru-ru/guide/safari/sfri11471/mac)
							</Link>
						</Text>
					</li>
					<li>
						<Text>
							[Microsoft Edge:]{' '}
							<Link
								href="#"
								className="block w-full truncate"
								variant="underline"
							>
								(https://support.microsoft.com/ru-ru/microsoft-edge/удаление-файлов-cookie-в-microsoft-edge-63 947 406−40ac-c3b8−57b9−2a946a29ae09)
							</Link>
						</Text>
					</li>
					<li>
						<Text>
							[Internet Explorer:]{' '}
							<Link
								href="#"
								variant="underline"
								className="block w-full truncate"
							>
								(https://support.microsoft.com/ru-ru/windows/удаление-файлов-cookie-и-управление-ими-168dab11−0753−043d-7c16-ede5947fc64d)
							</Link>
						</Text>
					</li>
				</ul>
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
					<Link href="#">здесь</Link>.
				</Text>
			</div>
		</Section>

		<Footer />
	</>
)

export default LegalPage
