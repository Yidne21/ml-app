import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types';
import { initialState } from './index';

const selectSlice = (state: RootState) => state?.loginScreen || initialState;

export const selectIsLoging = createSelector([selectSlice], (state) => state.isLoging);
export const selectIsLogedIn = createSelector([selectSlice], (state) => state.isLogedin);
export const errorMessage = createSelector([selectSlice], (state) => state.errorMessage);
