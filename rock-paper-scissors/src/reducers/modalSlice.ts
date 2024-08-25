import { createSlice } from '@reduxjs/toolkit'

interface ModalState {
    isOpen: boolean;
}

const initialState: ModalState = {
    isOpen: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        switchDisplay: (state) => {
            state.isOpen = !state.isOpen;
        }
    },
})

export const { switchDisplay } = modalSlice.actions

export default modalSlice.reducer