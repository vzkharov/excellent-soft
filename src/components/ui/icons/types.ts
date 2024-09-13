import type { ComponentPropsWithoutRef, ElementType, FC } from 'react'

type As = ElementType<any>
type ReactPropsOf<T extends As> = ComponentPropsWithoutRef<T>

type IconProps = ReactPropsOf<'svg'>

type IconElement = FC<IconProps>

export type { IconElement, IconProps }
