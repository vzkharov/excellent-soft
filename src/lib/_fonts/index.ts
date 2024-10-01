import localFont from 'next/font/local'

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
}

const fontsClassName = [gilroy.variable, gilroyBold.variable, bebasFont.variable].join(' ')

export { vars, fontsClassName }
