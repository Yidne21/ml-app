import { RootState } from '../../../../types';
import { initialState } from '.';
import { createSelector } from '@reduxjs/toolkit';

const selectSlice = (state: RootState) => state?.resetPasswordScreen || initialState;

export const selectIsResettingPassword = createSelector(
  [selectSlice],
  (state) => state.isResettingPassword,
);
export const selectIsReseted = createSelector([selectSlice], (state) => state.isReseted);
export const selectErrorMessage = createSelector([selectSlice], (state) => state.errorMessage);
