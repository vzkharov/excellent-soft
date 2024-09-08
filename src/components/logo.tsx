import Link from 'next/link'

import { cn } from '~/lib/utils'
import type { StyleProps } from '~/lib/types'

import { Image } from '~/components/ui/image'

const Logo = ({ className, ...props }: StyleProps) => (
	<Link
		{...props}
		href="/"
		className={cn('relative block flex-none w-max h-fit select-none', className)}
	>
		<Image
			width={1000}
			height={1000}
			alt="logo"
			loading="eager"
			src="/logo.png"
			className="w-28 aspect-[3/1] object-cover"
		/>
	</Link>
)

export { Logo }
