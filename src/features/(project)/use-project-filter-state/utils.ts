import type { FilterState } from './types'

const defaultFilterState = {
	type: '',
	purpose: '',
} satisfies FilterState

const convertRawState = (stateStr?: string): FilterState => {
	const rawState = JSON.parse(stateStr || '{}') as unknown as FilterState

	return {
		type: rawState.type || defaultFilterState.type,
		purpose: rawState.purpose || defaultFilterState.purpose,
	}
}

export { convertRawState, defaultFilterState }
