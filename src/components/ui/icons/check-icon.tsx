import type { IconElement } from './types'

const CheckIcon: IconElement = ({ size = '1em', ...props }) => (
	<svg
		width={size}
		height={size}
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
		fill="none"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M20 6 9 17l-5-5" />
	</svg>
)

export { CheckIcon }
