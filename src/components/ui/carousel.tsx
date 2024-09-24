'use client'

import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'

import { ArrowDownIcon } from './icons/arrow-down-icon'
import { Button, type ButtonProps } from './button'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = CarouselVariants & {
	opts?: CarouselOptions
	plugins?: CarouselPlugin
	setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0]
	api: ReturnType<typeof useEmblaCarousel>[1]
	scrollPrev: () => void
	scrollNext: () => void
	canScrollPrev: boolean
	canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
	const context = React.useContext(CarouselContext)

	if (!context) {
		throw new Error('useCarousel must be used within a <Carousel />')
	}

	return context
}

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
	({ orientation = 'horizontal', opts, setApi, plugins, className, children, ...props }, ref) => {
		const [carouselRef, api] = useEmblaCarousel(
			{
				...opts,
				axis: orientation === 'horizontal' ? 'x' : 'y',
			},
			plugins,
		)
		const [canScrollPrev, setCanScrollPrev] = React.useState(false)
		const [canScrollNext, setCanScrollNext] = React.useState(false)

		const onSelect = React.useCallback((api: CarouselApi) => {
			if (!api) {
				return
			}

			setCanScrollPrev(api.canScrollPrev())
			setCanScrollNext(api.canScrollNext())
		}, [])

		const scrollPrev = React.useCallback(() => {
			api?.scrollPrev()
		}, [api])

		const scrollNext = React.useCallback(() => {
			api?.scrollNext()
		}, [api])

		const handleKeyDown = React.useCallback(
			(event: React.KeyboardEvent<HTMLDivElement>) => {
				if (event.key === 'ArrowLeft') {
					event.preventDefault()
					scrollPrev()
				} else if (event.key === 'ArrowRight') {
					event.preventDefault()
					scrollNext()
				}
			},
			[scrollPrev, scrollNext],
		)

		React.useEffect(() => {
			if (!api || !setApi) {
				return
			}

			setApi(api)
		}, [api, setApi])

		React.useEffect(() => {
			if (!api) {
				return
			}

			onSelect(api)
			api.on('reInit', onSelect)
			api.on('select', onSelect)

			return () => {
				api?.off('select', onSelect)
			}
		}, [api, onSelect])

		const styles = carouselStyles()

		return (
			<CarouselContext.Provider
				value={{
					carouselRef,
					api: api,
					opts,
					orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
					scrollPrev,
					scrollNext,
					canScrollPrev,
					canScrollNext,
				}}
			>
				<div
					ref={ref}
					onKeyDownCapture={handleKeyDown}
					className={styles.container({ className })}
					role="region"
					aria-roledescription="carousel"
					{...props}
				>
					{children}
				</div>
			</CarouselContext.Provider>
		)
	},
)
Carousel.displayName = '@excellent-soft/carousel'

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => {
		const { carouselRef, orientation } = useCarousel()

		const styles = carouselStyles({ orientation })

		return (
			<div ref={carouselRef}>
				<div
					ref={ref}
					className={styles.content({ className })}
					{...props}
				/>
			</div>
		)
	},
)
CarouselContent.displayName = '@excellent-soft/carousel/content'

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => {
		const { orientation } = useCarousel()

		const styles = carouselStyles({ orientation })

		return (
			<div
				ref={ref}
				role="group"
				aria-roledescription="slide"
				className={styles.item({ className })}
				{...props}
			/>
		)
	},
)
CarouselItem.displayName = '@excellent-soft/carousel/item'

const CarouselControls = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Button>>(
	({ className, variant = 'outlined', size = 'icon', ...props }, ref) => {
		const { orientation, scrollNext, canScrollNext, scrollPrev, canScrollPrev } = useCarousel()

		const styles = carouselStyles({ orientation })

		const buttonProps: Partial<ButtonProps> = {
			size,
			variant,
			className: styles.button({ className }),
		}

		return (
			<div
				ref={ref}
				className={styles.controls()}
			>
				<Button
					{...buttonProps}
					onClick={scrollPrev}
					disabled={!canScrollPrev}
					{...props}
				>
					<ArrowDownIcon className={styles.icon({ className: 'rotate-90' })} />
				</Button>
				<Button
					{...buttonProps}
					onClick={scrollNext}
					disabled={!canScrollNext}
					{...props}
				>
					<ArrowDownIcon className={styles.icon({ className: '-rotate-90' })} />
				</Button>
			</div>
		)
	},
)
CarouselControls.displayName = '@excellent-soft/carousel/controls'

const carouselStyles = tv({
	slots: {
		container: 'relative w-full',
		content: 'flex',
		item: 'min-w-0 shrink-0 grow-0 basis-auto select-none',
		controls: 'mx-auto flex w-fit items-center gap-4',
		button: 'h-14 w-14 rounded-full border-dark',
		icon: 'h-6 w-6',
	},
	variants: {
		orientation: {
			horizontal: {
				content: '-ml-6 flex-row',
				item: 'pl-6',
				controls: 'flex-row',
				button: '',
			},
			vertical: {
				content: '-mt-6 flex-col',
				item: 'pt-6',
				controls: 'flex-col',
				button: 'rotate-90',
			},
		},
	},
	defaultVariants: {
		orientation: 'horizontal',
	},
})

type CarouselVariants = VariantProps<typeof carouselStyles>

export { Carousel, CarouselContent, CarouselItem, CarouselControls }
export type { CarouselApi }
