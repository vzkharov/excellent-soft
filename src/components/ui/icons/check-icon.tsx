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
		<path d="M21.801 10A10 10 0 1 1 17 3.335" />
		<path d="m9 11 3 3L22 4" />
	</svg>
)

export { CheckIcon }
