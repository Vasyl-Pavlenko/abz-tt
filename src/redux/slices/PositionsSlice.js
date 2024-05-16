import { createSlice } from "@reduxjs/toolkit";
import { getPositions } from "../actions";

export const positionsSlice = createSlice({
  name: "positions",
  initialState: {
    positions: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPositions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPositions.fulfilled, (state, action) => {
        state.positions = action.payload;
        state.status = "succeeded";
      })
      .addCase(getPositions.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});

export default positionsSlice.reducer;
