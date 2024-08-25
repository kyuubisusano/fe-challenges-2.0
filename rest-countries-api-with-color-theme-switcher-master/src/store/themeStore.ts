// // import { createStore } from "zustand/vanilla"
// import { createStore } from "zustand"

// export type ThemeState = {
//     dark: boolean
// }

// export type ThemeActions = {
//     toggleTheme : () => void
// }

// export type store  = ThemeState & ThemeActions

// export const defaultInitState : ThemeState = {
//     dark: true
// }

// export const Store = (
//     initState: ThemeState = defaultInitState,
//   ) => {
//     return createStore<store>()((set) => ({
//       ...initState,
//       toggleTheme: () => set((state) => ({ dark: !state.dark })),
//     }))
//   }


import { create } from 'zustand'

export interface ThemeState {
  dark: boolean
  toggle: () => void
}


export const useThemeStore = create<ThemeState>()((set) => ({
  dark: true,
  toggle: () => set((state) => ({ dark: !state.dark })),
}))