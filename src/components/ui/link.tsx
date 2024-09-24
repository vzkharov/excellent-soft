import { tv, type VariantProps } from 'tailwind-variants'
import InternalLink, { LinkProps as InternalLinkProps } from 'next/link'

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof InternalLinkProps> &
	InternalLinkProps &
	LinkVariants & {}

const Link = ({ href, className, full = false, variant = 'default', ...props }: LinkProps) => (
	<InternalLink
		href={href}
		{...props}
		className={linkVariants({ full, variant, className })}
	/>
)

const linkVariants = tv({
	base: 'inline-block whitespace-nowrap',
	variants: {
		variant: {
			default: 'font-gilroy-bold',
			underline: 'font-gilroy underline',
			gradient: 'hover:text-gradient focus:text-gradient',
		},
		full: { true: 'w-full', false: '' },
	},
	defaultVariants: {
		full: false,
		variant: 'default',
	},
})

type LinkVariants = VariantProps<typeof linkVariants>

export { Link }
