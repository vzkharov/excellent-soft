import { Button, ButtonVariants } from '../ui/button'

interface TelegramButtonProps extends ButtonVariants {
	children: string
}

const TelegramButton = ({ variant, children }: TelegramButtonProps) => {
	return (
		<Button
			variant={variant}
			size={'sm'}
		>
			{children}
			<svg
				width={15}
				height={12}
				className="fill-current"
			>
				<use href="/social-media/telegram-small.svg#icon"></use>
			</svg>
		</Button>
	)
}

export { TelegramButton }
