import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/UserSlice';
import { tokenSlice } from './slices/TokenSlice';
import { positionsSlice } from './slices/PositionsSlice';
import { signUpSlice } from './slices/SignUpSlice';

export const store = configureStore({
  reducer: {
    signUp: signUpSlice.reducer,
    user: userSlice.reducer,
    token: tokenSlice.reducer,
    positions: positionsSlice.reducer,
  },
});
