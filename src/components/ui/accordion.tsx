'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { tv } from 'tailwind-variants'

import { PlusIcon } from './icons/plus-icon'
import { MinusIcon } from './icons/minus-icon'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={accordionStyles.item({ className })}
		{...props}
	/>
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={accordionStyles.trigger({ className })}
			{...props}
		>
			{children}
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionCloseIcon = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<span
		ref={ref}
		{...props}
		className={accordionStyles.control({ className })}
	>
		<PlusIcon
			size="0.75em"
			className={accordionStyles.plusIcon()}
		/>
		<MinusIcon
			size="0.75em"
			className={accordionStyles.minusIcon()}
		/>
	</span>
))
AccordionCloseIcon.displayName = '@excellent-soft/accordion/control'

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className={accordionStyles.content()}
		{...props}
	>
		<div className={accordionStyles.contentInner({ className })}>{children}</div>
	</AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

const accordionStyles = tv({
	slots: {
		item: 'rounded-md bg-gray-900',
		trigger: 'group/accordion-trigger flex flex-1 items-center justify-between px-8 py-8 text-left font-medium transition-all hover:underline ',
		content: 'group/accordion-content overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
		contentInner: 'px-8 pb-8 pt-0',

		control: 'flex aspect-square h-14 w-14 flex-none items-center justify-center rounded-full bg-white',
		plusIcon: 'block group-[[data-state=open]]/accordion-trigger:hidden',
		minusIcon: 'hidden group-[[data-state=open]]/accordion-trigger:block',
	},
})()

export { Accordion, AccordionCloseIcon, AccordionItem, AccordionTrigger, AccordionContent }
