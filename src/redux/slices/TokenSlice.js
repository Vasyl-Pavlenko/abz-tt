import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "../actions";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getToken.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getToken.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload;
      })
      .addCase(getToken.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
  });

export default tokenSlice.reducer;