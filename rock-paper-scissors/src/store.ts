import { configureStore } from '@reduxjs/toolkit'
import scoreReducer from './reducers/scoreSlice'
import tileReducer from './reducers/tileSlice'
import modalReducer from './reducers/modalSlice'
export const store = configureStore({
    reducer : {
        score: scoreReducer,
        tile: tileReducer,
        modal: modalReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch