import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types';
import { initialState } from './index';

const selectSlice = (state: RootState) => state?.signUpScreen || initialState;

export const selectSignUp = createSelector([selectSlice], (state) => state.user);
export const selectIsSigning = createSelector([selectSlice], (state) => state.isSigning);
