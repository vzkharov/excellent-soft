import type { IconElement } from './types'

const MenuIcon: IconElement = (props) => (
	<svg
		width="2em"
		height="1em"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
		fill="none"
		viewBox="0 0 42 9"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M41 8H19" />
		<path d="M41 1L1 1" />
	</svg>
)

export { MenuIcon }
