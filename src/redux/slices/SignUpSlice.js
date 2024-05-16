import { createSlice } from "@reduxjs/toolkit";

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState: {
    isSignUp: false,
  },
  reducers: {
    toggleState: (state) => {
      state.isSignUp = true;
    },
  },
});

export const { toggleState } = signUpSlice.actions;