import { Button } from './ui/button'

const Footer = () => {
	return (
		<div>
			<div className="flex items-center justify-center bg-gradient-to-r from-gradient-start to-gradient-end py-9">
				<Button
					variant="outline"
					className="bg-transparent"
				>
					Давайте обсудим ваш проект
				</Button>
			</div>
			<footer className="flex items-center justify-center bg-muted px-6 py-4 font-semibold">
				Footer
			</footer>
		</div>
	)
}

export { Footer }
