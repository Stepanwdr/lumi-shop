import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { AssessmentLevels } from '@shared/lib/hooks/queries/globalRating/useGetClientsList'

export interface FilterOption {
  id: number
  name: string
}

export interface IFilterSliceState {
  level: AssessmentLevels | null
  filterItems: {
    country: FilterOption
    region: FilterOption
    city: FilterOption
  }
}

interface AddFilterPayload {
  category: keyof IFilterSliceState['filterItems']
  value: FilterOption
}

type DeleteFilterPayload = keyof IFilterSliceState['filterItems']

const initialState: IFilterSliceState = {
  filterItems: {
    country: {
      id: 0,
      name: ''
    },
    region: {
      id: 0,
      name: ''
    },
    city: {
      id: 0,
      name: ''
    }
  },
  level: null
}

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState: initialState,
  reducers: {
    changeLevel(state, action: PayloadAction<AssessmentLevels | null>) {
      state.level = action.payload
    },
    addFilter(state, action: PayloadAction<AddFilterPayload>) {
      const { category, value } = action.payload
      state.filterItems[category] = value
    },
    deleteFilter(state, action: PayloadAction<DeleteFilterPayload>) {
      const category = action.payload
      state.filterItems[category] = { id: 0, name: '' }
    },
    resetFilters(state) {
      state.filterItems = initialState.filterItems
      state.level = null
    }
  }
})

export const { addFilter, changeLevel, deleteFilter, resetFilters } =
  filterSlice.actions
export const filterReducer = filterSlice.reducer
