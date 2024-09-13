import { TelegramButton } from '~/components/(buttons)/telegram-button'
import { Button } from '~/components/ui/button'
import type { Page } from '~/lib/types'

const HomePage: Page = () => {
	return (
		<section className="container h-96">
			{/* <div className="mt-8 flex w-fit flex-col gap-y-4">
				<Button>OK</Button>
				<Button
					variant={'outlined'}
					size={'lg'}
				>
					Давайте обсудим ваш проект
				</Button>
				<Button
					variant={'gradient'}
					size={'lg'}
				>
					Отправить
				</Button>
				<Button
					variant={'accent'}
					size={'lg'}
				>
					Подробнее о разработке
				</Button>
				<Button
					variant={'outlined'}
					size={'sm'}
				>
					Задать вопрос
				</Button>
				<TelegramButton>Задать вопрос</TelegramButton>
				<TelegramButton variant={'secondary'}>Задать вопрос</TelegramButton>
			</div> */}
		</section>
	)
}

export default HomePage
