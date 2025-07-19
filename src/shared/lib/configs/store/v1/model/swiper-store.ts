import { create } from 'zustand'

interface ISwiperStore {
  activeSlide: number
  setActiveSlide: (activeSlide: number) => void
}

export const useSwiperStore = create<ISwiperStore>(set => ({
  activeSlide: 0,
  setActiveSlide: activeSlide => set(_ => ({ activeSlide }))
}))
