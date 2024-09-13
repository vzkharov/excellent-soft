import type { IconElement } from './types'

const XIcon: IconElement = (props) => (
	<svg
		width="1em"
		height="1em"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
		fill="none"
		viewBox="0 0 22 22"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M1 1L21 21M1 21L21 1" />
	</svg>
)

export { XIcon }
