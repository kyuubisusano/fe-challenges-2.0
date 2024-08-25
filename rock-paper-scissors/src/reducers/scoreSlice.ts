import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

// Define a type for the slice state
interface ScoreState {
  value: number
}

// Define the initial state using that type
const initialState: ScoreState = {
  value: 0,
}

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const { increment, decrement } = scoreSlice.actions

export default scoreSlice.reducer