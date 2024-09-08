import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { Text } from '~/components/ui/text'
import { Button } from '~/components/ui/button'

type CookiesBannerProps = StyleProps & {
	confirm?: (event: React.FormEvent<HTMLFormElement>) => unknown
}

const CookiesBanner = ({ style, confirm, className }: CookiesBannerProps) => (
	<form
		style={style}
		className={cn(
			'h-fit',
			'mx-auto w-full px-5 py-5',
			'flex items-center gap-4',
			'border-container shadow-brand !border-2 bg-white',
			'max-md:flex-col max-md:gap-y-3',
			className,
		)}
		onSubmit={(event) => {
			event.preventDefault()
			confirm?.(event)
		}}
	>
		<Button
			size="icon"
			color="secondary"
			className="self-start text-2xl"
		>
			🍪
		</Button>

		<div className="flex flex-col gap-y-1.5 self-start max-md:mb-2">
			<Text className="max-w-3xl cursor-default text-base leading-snug">
				На нашем сайте мы обрабатываем cookie для улучшения вашего пользовательского опыта:
			</Text>

			<a
				target="_blank"
				href="/legal/cookies.pdf"
				className="text-link-default hover:text-link-active min-h-max w-max text-base font-medium transition-all"
			>
				Больше информации
			</a>
		</div>

		<Button
			size="sm"
			type="submit"
			className="ml-auto self-start px-4 py-2.5 max-md:w-full md:self-center"
		>
			Понимаю
		</Button>
	</form>
)

export { CookiesBanner }
export type { CookiesBannerProps }
