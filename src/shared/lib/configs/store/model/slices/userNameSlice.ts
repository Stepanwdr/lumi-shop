import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface UserNameAuth {
  userName: string
  level: number | null
  userSurname: string
  clientId: number | null
  createdAt?: string
  avatar: string
  sex: string | null
  verifiedAt: string | null
  email: string
  upcomingEventsCount: number
  actionBallsGiftsCount: number
  phoneNumber: string | null
}

const initialState: UserNameAuth = {
  userName: '',
  level: null,
  userSurname: '',
  clientId: null,
  createdAt: '',
  avatar: '',
  sex: null,
  verifiedAt: null,
  email: '',
  upcomingEventsCount: 0,
  actionBallsGiftsCount: 0,
  phoneNumber: null
}

export const userNameSlice = createSlice({
  name: 'userNameSlice',
  initialState,
  reducers: {
    setUserName: (
      state,
      action: PayloadAction<{
        userName: string
        userSurname: string
      }>
    ) => {
      state.userName = action.payload.userName
      state.userSurname = action.payload.userSurname
      localStorage.setItem('userName', action.payload.userName)
    },
    setClientId: (
      state,
      action: PayloadAction<{
        clientId: number
        createdAt?: string
      }>
    ) => {
      state.clientId = action.payload.clientId
      state.createdAt = action.payload.createdAt
    },
    setAvatar: (
      state,
      action: PayloadAction<{
        avatar: string
      }>
    ) => {
      state.avatar = action.payload.avatar
    },
    setSex: (state, action: PayloadAction<{ sex: string | null }>) => {
      state.sex = action.payload.sex
    },
    setLevel: (state, action: PayloadAction<{ level: number | null }>) => {
      state.level = action.payload.level
    },
    setEmail: (
      state,
      action: PayloadAction<{ verifiedAt: string | null; email: string }>
    ) => {
      state.verifiedAt = action.payload.verifiedAt
      if (!action.payload.email?.includes('@example.com')) {
        state.email = action.payload.email
      }
    },
    setUpcomingEventsCount: (
      state,
      action: PayloadAction<{ upcomingEventsCount: number }>
    ) => {
      state.upcomingEventsCount = action.payload.upcomingEventsCount
    },
    setActionBallsGifts: (
      state,
      action: PayloadAction<{ actionBallsGiftsCount: number }>
    ) => {
      state.actionBallsGiftsCount = action.payload.actionBallsGiftsCount
    },
    setPhoneNumber: (state, action: PayloadAction<{ phoneNumber: string }>) => {
      state.phoneNumber = action.payload.phoneNumber
    }
  }
})

export const {
  setUserName,
  setAvatar,
  setUpcomingEventsCount,
  setClientId,
  setSex,
  setEmail,
  setLevel,
  setActionBallsGifts,
  setPhoneNumber
} = userNameSlice.actions
export const userNameReducer = userNameSlice.reducer
