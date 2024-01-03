import { RootState } from '../../../../types';
import { initialState } from '.';
import { createSelector } from '@reduxjs/toolkit';

const selectSlice = (state: RootState) => state?.forgotPasswordScreen || initialState;

export const selectIsForgotingPassword = createSelector(
  [selectSlice],
  (state) => state.isForgotingPassword,
);
export const selectIsVerifyiedOtp = createSelector([selectSlice], (state) => state.isVerifyiedOtp);
