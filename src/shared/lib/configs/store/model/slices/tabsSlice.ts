import { createSlice } from '@reduxjs/toolkit'

import { ITab } from '@shared/ui/Tabs/Tabs'

interface ITabsSliceState {
  dataTabs: ITab[]
  selectedId: string
}

const initialState: ITabsSliceState = {
  dataTabs: [{ id: 'myUpcomingEvents' }, { id: 'results' }],
  selectedId: 'myUpcomingEvents'
}

export const tabsSlice = createSlice({
  name: 'tabsSlice',
  initialState: initialState,
  reducers: {
    setSelectedId(state, action) {
      state.selectedId = action.payload
    }
  }
})

export const { setSelectedId } = tabsSlice.actions
export const tabsReducer = tabsSlice.reducer
