import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    error: null
};
export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            return state = action.payload;
        },
        setError: (state, action) => {
            return state = action.payload;
        }
    }
})

export const appReducer = appSlice.reducer;
export const appActions = appSlice.actions;
