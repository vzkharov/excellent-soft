import { Image } from '~/components/ui/image'

const NotFoundImage = () => (
	<Image
		alt="404"
		src="/404.svg"
		className="h-[100vw] w-full sm:h-[500px] sm:w-auto"
	/>
)

export { NotFoundImage }
