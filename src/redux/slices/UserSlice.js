import { createSlice } from '@reduxjs/toolkit';
import { getUsers, getMoreUsers, createNewUser } from '../actions';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    page: 1,
    status: 'idle',
    error: null,
    hasMoreUsers: true,
  },
  reducers: {
    nextPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      //getUsers
      .addCase(getUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'error';
      })
      //getMoreUsers
      .addCase(getMoreUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMoreUsers.fulfilled, (state, action) => {
        const { users, total_pages } = action.payload;

        state.users = [...state.users, ...users];
        state.status = 'succeeded';

        if (state.page >= total_pages) {
          state.hasMoreUsers = false;
        }
      })
      .addCase(getMoreUsers.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      })
      //createUser
      .addCase(createNewUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createNewUser.fulfilled, (state) => {
        state.users = [];
        state.page = 1;
        state.status = 'succeeded';
      })
      .addCase(createNewUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'error';
      });
  },
});

export const { nextPage } = userSlice.actions;

export default userSlice.reducer;
