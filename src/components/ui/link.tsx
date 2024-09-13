import { tv, type VariantProps } from 'tailwind-variants'
import InternalLink, { LinkProps as InternalLinkProps } from 'next/link'

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof InternalLinkProps> &
	InternalLinkProps &
	LinkVariants & {}

const Link = ({ href, className, full = false, ...props }: LinkProps) => (
	<InternalLink
		href={href}
		{...props}
		className={linkVariants({ full, className })}
	/>
)

const linkVariants = tv({
	base: 'inline-block whitespace-nowrap w-full',
	variants: {
		full: { true: 'w-full', false: '' },
	},
	defaultVariants: {
		full: false,
	},
})

type LinkVariants = VariantProps<typeof linkVariants>

export { Link }
