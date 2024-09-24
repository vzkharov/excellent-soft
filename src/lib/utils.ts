import { cn as cnFactory, type ClassValue } from 'tailwind-variants'

export const cn = (...inputs: ClassValue[]) => cnFactory(...inputs)({ twMerge: true })
