'use client'

import { useState } from 'react'
import { tv } from 'tailwind-variants'

import { Text } from '~/components/ui/text'
import { Input } from '~/components/ui/input'
import { Button, type ButtonProps } from '~/components/ui/button'
import { Dialog, DialogTitle, DialogHeader, DialogTrigger, DialogContent } from '~/components/ui/dialog'

import { HubSpotForm, SubmitButton } from '~/modules/hub-spot-form'

const ContactButton = (props: ButtonProps) => {
	const [open, setOpen] = useState<boolean>(false)

	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
		>
			<DialogTrigger asChild>
				<Button {...props} />
			</DialogTrigger>
			<DialogContent className={styles.content()}>
				<DialogHeader>
					<DialogTitle>Давайте обсудим вашу идею!</DialogTitle>
				</DialogHeader>

				<div className={styles.body()}>
					<Text>С нами можно связаться любым удобным способом:</Text>

					<li>Написать нам в Telegram или WhatsApp</li>
					<li>Либо мы вам перезвоним</li>
				</div>

				<HubSpotForm
					onSettled={() => setOpen(false)}
					className={styles.footer()}
				>
					<Input
						type="tel"
						name="phone"
						color="default"
						placeholder="Ваш номер телефона"
					/>
					<SubmitButton
						bold
						className={styles.submitButton()}
					>
						Перезвонить мне
					</SubmitButton>
				</HubSpotForm>
			</DialogContent>
		</Dialog>
	)
}

const styles = tv({
	slots: {
		content: 'px-10 pb-12 pt-10',
		body: 'flex flex-col gap-y-3',
		footer: 'flex flex-col items-stretch gap-y-4 md:flex-row',
		submitButton: 'w-full md:w-fit',
	},
})()

export { ContactButton }
