import { Image } from '~/components/ui/image'

const InternalErrorImage = () => (
	<Image
		alt="500"
		src="/500.svg"
		className="h-[100vw] w-full sm:h-[500px] sm:w-auto"
	/>
)

export { InternalErrorImage }
