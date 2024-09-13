import type { IconElement } from './types'

const ArrowDownIcon: IconElement = ({ size = '1em', ...props }) => (
	<svg
		width={size}
		height={size}
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
		fill="none"
		viewBox="0 0 22 22"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M1 10.5556L21 10.5556M21 10.5556L11.5556 1.11111M21 10.5556L11.5556 20" />
	</svg>
)

export { ArrowDownIcon }
