import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state?.cartScreen || initialState;
export const selectCart = createSelector([selectSlice], (state) => state.cartDetail);
export const selectIsLoading = createSelector([selectSlice], (state) => state.isLoading);
