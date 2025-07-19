import { createSlice } from '@reduxjs/toolkit'

import { getValueFromLS } from '@shared/lib/utils/localeStorageUtils'

interface AuthSlice {
  isAuth: boolean
}

const initialState: AuthSlice = {
  isAuth: !!getValueFromLS('token')
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setIsAuth: state => {
      state.isAuth = true
    },
    deleteIsAuth: state => {
      state.isAuth = false
    },
  }
})

export const { setIsAuth, deleteIsAuth } = authSlice.actions
export const authReducer = authSlice.reducer
