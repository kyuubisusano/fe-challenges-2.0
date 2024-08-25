import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

// Define a type for the slice state
interface TileState {
  userSelected: number;
  houseSelected: number;
}

// Define the initial state using that type
const initialState: TileState = {
  userSelected: 0,
  houseSelected: 0,
}

export const tileSlice = createSlice({
  name: 'tile',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<{ userSelected?: number, houseSelected?: number }>) => {
      if (action.payload.userSelected !== undefined) {
        state.userSelected = action.payload.userSelected;
      }
      if (action.payload.houseSelected !== undefined) {
        state.houseSelected = action.payload.houseSelected;
      }
    },
  },
})

export const { change } = tileSlice.actions

export default tileSlice.reducer