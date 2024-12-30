import type { IconElement } from './types'

const ArrowRightIcon: IconElement = ({ size = '1em', ...props }) => (
	<svg
		width="65"
		height="62"
		viewBox="0 0 65 62"
		{...props}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M2 31L62.9744 31M62.9744 31L34.1809 2M62.9744 31L34.1809 60"
			stroke="currentColor"
			strokeWidth="2.8"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

export { ArrowRightIcon }
