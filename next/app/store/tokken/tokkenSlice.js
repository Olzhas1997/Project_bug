import { createSlice } from "@reduxjs/toolkit";


const initialState = "";

export const tokkenSlice = createSlice({
  name: 'tokken',
  initialState,
  reducers: {
    writeTokken: (state, action) => {
      return state = action.payload;
    }
  }
})

export const tokkenReducer = tokkenSlice.reducer;
export const tokkenActions = tokkenSlice.actions;
