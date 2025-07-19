import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

// eslint-disable-next-line import/no-restricted-paths
import { type RootModalComponents } from '@widgets/modal/ui/RootModal'

type namesPanel = keyof RootModalComponents | ''

export interface ModalSlice<T = unknown> {
  name: namesPanel
  props: T
}

const initialState: ModalSlice = {
  name: '',
  props: undefined
}

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    openModal: <T>(
      state: ModalSlice,
      action: PayloadAction<{
        name: namesPanel
        props: T
      }>
    ) => {
      state.name = action.payload.name
      state.props = action.payload.props
    },
    closeModal: state => {
      state.name = ''
    }
  }
})

export const { openModal, closeModal } = modalSlice.actions
export const modalReducer = modalSlice.reducer
