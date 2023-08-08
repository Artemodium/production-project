import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addCommentFormSchema } from '../types/addCommentFormTypes'

const initialState: addCommentFormSchema = {
    text: '',
}

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        },
    },
    extraReducers: (builder) => {
    },
})

export const { actions: addCommentFormActions } = addCommentFormSlice
export const { reducer: addCommentFormReducer } = addCommentFormSlice
