import { configureStore } from '@reduxjs/toolkit'

import { authReducer } from './slices/authSlice'
import { filterReducer } from './slices/filterSlice'
import { modalReducer } from './slices/modalSlice'
import { participationRobinReducer } from './slices/participationRobinSlice'
import { tabsReducer } from './slices/tabsSlice'
import { userMessageReducer } from './slices/userMessageSlice'
import { userNameReducer } from './slices/userNameSlice'

export const store = () => {
  return configureStore({
    reducer: {
      userMessageReducer,
      tabsReducer,
      modalReducer,
      authReducer,
      filterReducer,
      userNameReducer,
      participationRobinReducer
    }
  })
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
