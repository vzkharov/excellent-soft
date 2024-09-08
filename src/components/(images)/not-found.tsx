import { Image } from '~/components/ui/image'

const NotFoundImage = () => (
	<Image
		alt="404"
		src="/404.svg"
		className="w-full h-[100vw] sm:h-[500px] sm:w-auto"
	/>
)

export { NotFoundImage }
