import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import { Mulish } from 'next/font/google'

const inter = Inter({ weight: ['700', '800'], variable: '--font-inter', subsets: ['cyrillic'] })
const mulish = Mulish({ weight: ['900'], variable: '--font-mulish', subsets: ['latin'] })

const gilroy = localFont({
	src: './gilroy-regular.ttf',
	display: 'swap',
	variable: '--font-gilroy',
})
const gilroyBold = localFont({
	src: './gilroy-bold.ttf',
	display: 'swap',
	variable: '--font-gilroy-bold',
})
const bebasFont = localFont({
	src: './aa-bebas-neue.ttf',
	display: 'swap',
	variable: '--font-bebas',
})

const vars = {
	gilroy: gilroy.variable,
	gilroyBold: gilroy.variable,
	bebasFont: gilroy.variable,
	inter: inter.variable,
	mulish: mulish.variable,
}

const fontsClassName = [gilroy.variable, gilroyBold.variable, bebasFont.variable, inter.variable, mulish.variable].join(
	' ',
)

export { vars, fontsClassName }
