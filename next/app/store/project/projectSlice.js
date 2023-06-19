import { createSlice } from "@reduxjs/toolkit";

const initialState = "1";
export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    changeActive: (state, action) => {
      return state = action.payload;
    }
  }
})

export const projectReducer = projectSlice.reducer;
export const projectActions = projectSlice.actions;
