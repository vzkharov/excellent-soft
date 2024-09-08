import { Button } from './ui/button'

const Footer = () => {
	return (
		<div>
			<div className="bg-gradient-to-r from-gradient-start to-gradient-end py-9 flex items-center justify-center">
				<Button
					variant="outline"
					className="bg-transparent"
				>
					Давайте обсудим ваш проект
				</Button>
			</div>
			<footer className="bg-muted px-6 py-4 font-semibold flex items-center justify-center">
				Footer
			</footer>
		</div>
	)
}

export { Footer }
