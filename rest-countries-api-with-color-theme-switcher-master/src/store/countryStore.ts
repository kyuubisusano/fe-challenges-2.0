
import { create } from 'zustand'

export interface CountryState {
  country: {}
  update: (value: any) => void
}


export const useCountryStore = create<CountryState>()((set) => ({
  country: {},
  update: (value) => set((state) => ({
    country: value
  })),
}))