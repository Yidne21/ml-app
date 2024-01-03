import { RootState } from '../../../../types';
import { initialState } from '.';
import { createSelector } from '@reduxjs/toolkit';

const selectSlice = (state: RootState) => state?.resetPasswordScreen || initialState;

export const selectIsResettingPassword = createSelector(
  [selectSlice],
  (state) => state.isResettingPassword,
);

export const selectResetPassword = createSelector([selectSlice], (state) => state);
