import type { IconElement } from './types'

const TelegramIcon: IconElement = ({ size = '1em', ...props }) => (
	<svg
		width={size}
		height={size}
		fill="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
		viewBox="0 0 15 12"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M14.2681 1.09244L12.1088 11.2756C11.9459 11.9943 11.521 12.1732 10.9173 11.8346L7.62726 9.4102L6.03973 10.937C5.86405 11.1127 5.71712 11.2597 5.37853 11.2597L5.6149 7.90892L11.7127 2.39888C11.9778 2.16251 11.6552 2.03154 11.3006 2.26792L3.76225 7.01453L0.51692 5.99877C-0.189004 5.77837 -0.201781 5.29285 0.663854 4.95426L13.3577 0.0639036C13.9454 -0.156498 14.4597 0.194867 14.2681 1.09244Z" />
	</svg>
)

export { TelegramIcon }
