import type { IconElement } from './types'

const ArrowDownIcon: IconElement = ({ size = '1em', ...props }) => (
	<svg
		width={size}
		height={size}
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
		fill="none"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M12 5v14" />
		<path d="m19 12-7 7-7-7" />
	</svg>
)

export { ArrowDownIcon }
