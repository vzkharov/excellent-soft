import { tv } from 'tailwind-variants'

import { Text } from '~/components/ui/text'
import { Input } from '~/components/ui/input'
import { Button, type ButtonProps } from '~/components/ui/button'
import { Dialog, DialogTitle, DialogHeader, DialogTrigger, DialogContent, DialogFooter } from '~/components/ui/dialog'

const ContactButton = (props: ButtonProps) => (
	<Dialog>
		<DialogTrigger asChild>
			<Button {...props} />
		</DialogTrigger>
		<DialogContent className={styles.content()}>
			<DialogHeader>
				<DialogTitle>Давайте обсудим вашу идею!</DialogTitle>
			</DialogHeader>

			<div className={styles.body()}>
				<Text>С нами можно связаться любым удобным способом:</Text>

				<li>Написать нам в Telegram или WhatsApp</li>
				<li>Либо мы вам перезвоним</li>
			</div>

			<DialogFooter className={styles.footer()}>
				<Input
					type="tel"
					name="phone"
					color="default"
					placeholder="Ваш номер телефона"
				/>
				<Button bold>Перезвонить мне</Button>
			</DialogFooter>
		</DialogContent>
	</Dialog>
)

const styles = tv({
	slots: {
		content: 'px-10 pb-12 pt-10',
		body: 'flex flex-col gap-y-3',
		footer: 'flex flex-row md:flex-row',
	},
})()

export { ContactButton }
