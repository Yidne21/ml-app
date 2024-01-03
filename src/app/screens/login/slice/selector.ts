import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types';
import { initialState } from './index';

const selectSlice = (state: RootState) => state?.loginScreen || initialState;

export const selectToken = createSelector([selectSlice], (state) => state.token);
export const selectIsLoging = createSelector([selectSlice], (state) => state.isLoging);
