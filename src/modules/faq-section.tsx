import { Fragment } from 'react'
import { tv } from 'tailwind-variants'
import { FeedButton } from '~/components/(buttons)/feed-button'
import { Section, SectionProps } from '~/components/(sections)'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion'
import { Separator } from '~/components/ui/separator'
import { Spacer } from '~/components/ui/spacer'
import { Title } from '~/components/ui/text'

type FaqSectionProps = Omit<SectionProps, 'title'> & {
	withTitle?: boolean
}

const FaqSection = ({ className, withTitle = false, ...props }: FaqSectionProps) => (
	<Section
		color="metal"
		{...props}
		title={withTitle ? 'Чем поможем?' : undefined}
		className={styles.section({ className })}
	>
		<Accordion
			type="multiple"
			className="mt-8 space-y-2"
		>
			{faq.map((item) => (
				<Fragment key={item.id}>
					<Separator color="foreground" />
					<AccordionItem
						id={item.id}
						value={item.id}
						className="bg-transparent px-0"
					>
						<AccordionTrigger className="px-0 py-12">{item.title}</AccordionTrigger>
						<AccordionContent>
							<Spacer y="2rem" />
							<FeedButton />
						</AccordionContent>
					</AccordionItem>
				</Fragment>
			))}
			<Separator color="foreground" />
		</Accordion>
	</Section>
)

const faq = [
	{
		id: '1',
		title: 'Запустить новый продукт на рынок',
	},
	{
		id: '2',
		title: 'Обновить старый сайт',
	},
	{
		id: '3',
		title: 'Привести больше клиентов',
	},
	{
		id: '4',
		title: 'Оптимизировать бизнес-процессы',
	},
	{
		id: '5',
		title: 'Привлечь потенциальных партнеров',
	},
]

const styles = tv({
	slots: {
		section: 'py-24',
		item: 'bg-transparent px-0',
		trigger: 'px-0 py-12',
	},
})()

export { FaqSection }
