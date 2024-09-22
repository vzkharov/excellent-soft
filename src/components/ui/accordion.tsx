'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { cn } from '~/lib/utils'

import { PlusIcon } from './icons/plus-icon'
import { MinusIcon } from './icons/minus-icon'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn('rounded-md bg-gray-900', className)}
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
			className={cn(
				'group/accordion-trigger flex flex-1 items-center justify-between px-8 py-8 text-left font-medium leading-none transition-all hover:underline data-[state=open]:pb-4',
				className,
			)}
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
		className={cn(
			'flex aspect-square h-14 w-14 flex-none items-center justify-center rounded-full bg-white',
			className,
		)}
	>
		<PlusIcon
			size="0.75em"
			className="block group-[[data-state=open]]/accordion-trigger:hidden"
		/>
		<MinusIcon
			size="0.75em"
			className="hidden group-[[data-state=open]]/accordion-trigger:block"
		/>
	</span>
))
AccordionCloseIcon.displayName = 'accordion-close-icon'

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className="group/accordion-content overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
		{...props}
	>
		<div className={cn('px-8 pb-8 pt-0', className)}>{children}</div>
	</AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionCloseIcon, AccordionItem, AccordionTrigger, AccordionContent }
