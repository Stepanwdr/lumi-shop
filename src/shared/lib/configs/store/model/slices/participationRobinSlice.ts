import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface ParticipationState {
  step: ParticipationRobinSteps
  previousStep: ParticipationRobinSteps | null
  isSolo: boolean | null
  teamName: string
  teamId: number | null
  link: string | undefined
  tourId: number | null
  tourName: string
  tourCategory: string
  tourDate: string
  tourTime: string
  tourClub: string
  isShowRobinSuccess: boolean
  myselfInTour: boolean
  teamIconStatus: string | undefined
  teamStatus: number | null | undefined
  invisibleStatus: number | undefined
  teamPaymentType: number | undefined
  isRegistrationStarted: boolean
}

export enum ParticipationRobinSteps {
  Initial = 'initial',
  Solo = 'solo',
  SoloPayLater = 'soloPayLater',
  SoloPayNow = 'soloPayNow',
  Team = 'team',
  TeamPayLater = 'teamPayLater',
  TeamPayNow = 'teamPayNow',
  TeamPayNowEveryone = 'teamPayNowEveryone',
  TeamPayNowMyself = 'teamPayNowMyself',
  Invitation = 'invitation'
}

const initialState: ParticipationState = {
  step: ParticipationRobinSteps.Initial,
  previousStep: null,
  isSolo: null,
  teamName: '',
  teamId: null,
  link: '',
  tourId: null,
  tourName: '',
  tourCategory: '',
  tourDate: '',
  tourTime: '',
  tourClub: '',
  isShowRobinSuccess: false,
  myselfInTour: false,
  teamIconStatus: '',
  teamStatus: null,
  invisibleStatus: 0,
  teamPaymentType: undefined,
  isRegistrationStarted: false
}

const participationRobinSlice = createSlice({
  name: 'participationRobinSlice',
  initialState,
  reducers: {
    selectTeamOrSolo(state, action: PayloadAction<{ isSolo: boolean | null }>) {
      state.isSolo = action.payload.isSolo
    },
    setStep(state, action: PayloadAction<ParticipationRobinSteps>) {
      state.previousStep = state.step
      state.step = action.payload
    },
    goToPreviousStep(state) {
      if (state.previousStep) {
        state.step = state.previousStep
        state.previousStep = null
      }
    },
    setTeamData(
      state,
      action: PayloadAction<{ teamName: string; teamId: number | null }>
    ) {
      state.teamName = action.payload.teamName
      state.teamId = action.payload.teamId
    },
    setJoinLink(state, action: PayloadAction<{ link: string | undefined }>) {
      state.link = action.payload.link
    },
    setTourId(state, action: PayloadAction<number>) {
      state.tourId = action.payload
    },
    setTourName(state, action: PayloadAction<string>) {
      state.tourName = action.payload
    },
    setTourDetails(
      state,
      action: PayloadAction<{
        tourCategory: string
        tourDate: string
        tourTime: string
        tourClub: string
      }>
    ) {
      state.tourCategory = action.payload.tourCategory
      state.tourDate = action.payload.tourDate
      state.tourTime = action.payload.tourTime
      state.tourClub = action.payload.tourClub
    },
    setIsShowRobinSuccess(state, action: PayloadAction<boolean>) {
      state.isShowRobinSuccess = action.payload
    },
    setMyselfInTour(state, action: PayloadAction<boolean>) {
      state.myselfInTour = action.payload
    },
    setTeamStatus(
      state,
      action: PayloadAction<{
        teamIconStatus: string | undefined
        teamStatus: number | undefined
      }>
    ) {
      state.teamIconStatus = action.payload.teamIconStatus
      state.teamStatus = action.payload.teamStatus
    },
    setInvisibleStatus(state, action: PayloadAction<number | undefined>) {
      state.invisibleStatus = action.payload
    },
    setTeamPaymentType(state, action: PayloadAction<number | undefined>) {
      state.teamPaymentType = action.payload
    },
    setIsRegistrationStarted(state, action: PayloadAction<boolean>) {
      state.isRegistrationStarted = action.payload
    }
  }
})

export const {
  selectTeamOrSolo,
  setStep,
  goToPreviousStep,
  setTeamData,
  setJoinLink,
  setTourId,
  setTourName,
  setTourDetails,
  setIsShowRobinSuccess,
  setMyselfInTour,
  setTeamStatus,
  setInvisibleStatus,
  setTeamPaymentType,
  setIsRegistrationStarted
} = participationRobinSlice.actions
export const participationRobinReducer = participationRobinSlice.reducer
