import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const bugsSlice = createSlice({
    name: 'bugs',
    initialState,
    reducers: {
        setBugs: (state, action) => {
            return state = action.payload;
        }
    }
})

export const bugsReducer = bugsSlice.reducer;
export const bugsActions = bugsSlice.actions;