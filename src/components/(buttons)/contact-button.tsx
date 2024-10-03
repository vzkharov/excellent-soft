'use client'

import { useState } from 'react'
import { tv } from 'tailwind-variants'

import { Input } from '~/components/ui/input'
import { Button, type ButtonProps } from '~/components/ui/button'
import {
	Dialog,
	DialogTitle,
	DialogHeader,
	DialogTrigger,
	DialogContent,
	DialogDescription,
} from '~/components/ui/dialog'

import { HubSpotForm, SubmitButton } from '~/modules/hub-spot-form'
import ContactModalDescription from '~/markdown/contact/modal-description.mdx'

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

				<DialogDescription
					asChild
					aria-describedby="mo"
					className={styles.body()}
				>
					<ContactModalDescription />
				</DialogDescription>

				<HubSpotForm className={styles.footer()}>
					<Input
						type="tel"
						name="phone"
						color="default"
						placeholder="Ваш номер телефона"
					/>
					<SubmitButton
						bold
						onClick={() => setOpen(false)}
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
