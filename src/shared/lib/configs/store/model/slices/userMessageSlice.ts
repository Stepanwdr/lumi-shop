import { createSlice } from '@reduxjs/toolkit'

interface IUserMessageSliceState {
  isVisible: boolean
}

const initialState: IUserMessageSliceState = {
  isVisible: true
}

export const userMessageSlice = createSlice({
  name: 'loginStatusSlice',
  initialState: initialState,
  reducers: {
    show(state) {
      state.isVisible = true
    },
    hide(state) {
      state.isVisible = false
    }
  }
})

export const { show, hide } = userMessageSlice.actions
export const userMessageReducer = userMessageSlice.reducer
