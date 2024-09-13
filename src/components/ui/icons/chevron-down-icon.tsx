import type { IconElement } from './types'

const ChevronDownIcon: IconElement = (props) => (
	<svg
		width="1em"
		height="0.5em"
		{...props}
		viewBox="0 0 10 5"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M5 5L9.33013 0.5H0.669873L5 5Z" />
	</svg>
)

export { ChevronDownIcon }
