const extractFormData = <T extends Record<string, string>>(data: FormData) =>
	Array.from(data.entries()).reduce<T>((acc, field) => {
		const name = field[0] as string
		const value = field[1].toString()

		// @ts-expect-error
		acc[name] = value

		return acc
	}, {} as T)

export { extractFormData }
