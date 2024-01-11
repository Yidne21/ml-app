import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types';
import { initialState } from './index';

const selectSlice = (state: RootState) => state?.signUpScreen || initialState;

export const selectSigned = createSelector([selectSlice], (state) => state.isSigned);
export const selectIsSigning = createSelector([selectSlice], (state) => state.isSigning);
export const selectErrorMsg = createSelector([selectSlice], (state) => state.errorMsg);
