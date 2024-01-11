import { RootState } from '../../../../types';
import { initialState } from '.';
import { createSelector } from '@reduxjs/toolkit';

const selectSlice = (state: RootState) => state?.verifyOtpScreen || initialState;

export const selectIsSendingOtp = createSelector([selectSlice], (state) => state.isSendingOtp);
export const selectValidOtp = createSelector([selectSlice], (state) => state.validOtp);
export const selectErrorMessage = createSelector([selectSlice], (state) => state.errorMessage);
