import 'server-only'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const getMarkdownRaw = (paths: string[] = []) => {
	const contentPath = path.join(process.cwd(), 'src', 'markdown')
	const filePath = path.join(contentPath, ...paths)

	const rawFileSource = fs.readFileSync(filePath)

	return matter(rawFileSource).content
}

const getHeadings = (source: string) => {
	const headingLines = source.split('\n').filter((line) => {
		return line.match(/^###*\s/)
	})

	return headingLines.map((raw) => {
		const text = raw.replace(/^###*\s/, '')

		const level = raw.slice(0, 3) === '#####' ? 3 : 2

		return { text, level }
	})
}

export { getHeadings, getMarkdownRaw }
