import Image from 'next/image'

import { sectionsConfig, tabs } from './_data'

import StackMarkdown from '~/markdown/web_3/stack.mdx'
import UIServiceMarkdown from '~/markdown/web_3/ui-service.mdx'
import PrinciplesMarkdown from '~/markdown/web_3/principles.mdx'
import DashboardMarkdown from '~/markdown/web_3/dashboard.mdx'

import { HeroSection } from './_sections/hero-section'
import { ProcessSection } from './_sections/process-section'
import { PromotionSection } from './_sections/promotion-section'
import { AdditionalSection } from './_sections/additional-section'

import { Title } from '~/components/ui/text'
import { Footer } from '~/components/footer'
import { Spacer } from '~/components/ui/spacer'
import { Section } from '~/components/(sections)'
import { FeedSection } from '~/components/(sections)/feed-section'
import { ServiceNavigation } from '../services/_components/service-navigation'

const title = 'Web 3.0 - Эффективный дизайн'

const WebPage = () => {
	return (
		<div className="flex flex-col pt-4">
			<Section>
				<ServiceNavigation items={tabs} />
			</Section>

			<Spacer y="xl" />

			<Section>
				<Title as="h2">{title}</Title>
			</Section>

			<Spacer y="2xl" />

			<Section>
				<div className="flex w-full flex-col">
					<StackMarkdown />
				</div>
			</Section>

			<Spacer y="4xl" />

			<HeroSection />

			<Section color="black">
				<ProcessSection />
			</Section>

			<FeedSection title="Смотреть пример Web3" />

			<Spacer y="4xl" />

			<Section>
				<PromotionSection section={sectionsConfig.ui}>
					<UIServiceMarkdown />
				</PromotionSection>
			</Section>

			<Spacer y="4xl" />

			<Section
				color="lightgray"
				className=" max-md:hidden"
			>
				<Image
					alt="image-1"
					src="/web_3/image-1.png"
					width={1116}
					height={550}
					className="h-[343px] md:h-[550px] lg:my-20 xl:my-32 2xl:my-40 "
				/>
			</Section>
			<section className="relative mt-2 flex gap-2 max-md:flex-col-reverse">
				<Image
					alt="abstraction"
					src="/web_3/abstraction.png"
					width={580}
					height={700}
					style={{
						width: 'calc(19vw + 300px)',
						height: 'calc(28vw + 200px)',
					}}
					className="img absolute aspect-auto opacity-30 brightness-150 max-md:hidden"
				/>
				<Image
					alt="image-2"
					src="/web_3/image-2.png"
					width={720}
					height={775}
					className="aspect-[72/75] w-full md:w-[55%]"
				/>
				<Image
					alt="image-3"
					src="/web_3/image-3.png"
					width={720}
					height={755}
					className="aspect-[55/75] w-full md:w-[45%]"
				/>
			</section>

			<Spacer y="4xl" />

			<Section>
				<PromotionSection
					section={sectionsConfig.principles}
					blur={true}
				>
					<PrinciplesMarkdown />
				</PromotionSection>
			</Section>

			<Spacer y="4xl" />

			<Section
				color="lightgray"
				id="add"
			>
				<AdditionalSection />
			</Section>

			<Spacer y="4xl" />

			<Section>
				<PromotionSection section={sectionsConfig.dashboard}>
					<DashboardMarkdown />
				</PromotionSection>
			</Section>
			<Footer />
		</div>
	)
}

export default WebPage
