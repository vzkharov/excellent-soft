import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { Text } from '~/components/ui/text'
import { Button } from '~/components/ui/button'

type CookiesBannerProps = StyleProps & {
	show?: boolean
	confirm?: (event: React.FormEvent<HTMLFormElement>) => unknown
}

const CookiesBanner = ({ style, confirm, className, show = false }: CookiesBannerProps) => {
	if (!show) {
		return null
	}

	return (
		<form
			style={style}
			className={cn(
				'h-fit',
				'mx-auto py-5 px-5 w-full',
				'flex items-center gap-4',
				'bg-white border-container shadow-brand !border-2',
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

			<div className="self-start flex flex-col gap-y-1.5 max-md:mb-2">
				<Text className="max-w-3xl text-base leading-snug cursor-default">
					На нашем сайте мы обрабатываем cookie для улучшения вашего пользовательского
					опыта:
				</Text>

				<a
					target="_blank"
					href="/legal/cookies.pdf"
					className="w-max min-h-max font-medium text-base text-link-default hover:text-link-active transition-all"
				>
					Больше информации
				</a>
			</div>

			<Button
				size="sm"
				type="submit"
				className="ml-auto self-start py-2.5 max-md:w-full md:self-center px-4"
			>
				Понимаю
			</Button>
		</form>
	)
}

export { CookiesBanner }
export type { CookiesBannerProps }
